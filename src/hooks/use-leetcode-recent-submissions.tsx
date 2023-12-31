import { useState, useEffect } from 'react'

const useLeetCodeRecentSubmissions = (username: string) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    const fetchRecentAcSubmissions = async () => {
      setLoading(true)
      setError(null)
      try {
        const endpoint = 'https://leetcode.com/graphql/'
        const query = `
          query recentAcSubmissions($username: String!, $limit: Int!) {
            recentAcSubmissionList(username: $username, limit: $limit) {
              id
              title
              titleSlug
              timestamp
            }
          }
        `
        const variables = {
          username,
          limit: 100,
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            referer: 'https://leetcode.com/',
          },
          body: JSON.stringify({ query, variables }),
        })

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        const filteredResults = data.data.recentAcSubmissionList.filter((submission: any) => {
          const timestampSeconds = parseInt(submission?.timestamp)
          const currentTimestamp = Math.floor(Date.now() / 1000) // Current timestamp in seconds

          // Check if the submission occurred within the past 7 days
          return currentTimestamp - timestampSeconds <= 604800
        })

        // setResult(data.data.recentAcSubmissionList)
        setResult(filteredResults)
      } catch (error) {
        console.log(error)
        setError('Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchRecentAcSubmissions()
    }
  }, [username])

  return { loading, result, error }
}

export default useLeetCodeRecentSubmissions

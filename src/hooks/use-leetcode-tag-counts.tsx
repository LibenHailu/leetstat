import { useState, useEffect } from 'react'

type Tag = {
  tagName: string
  tagSlug: string
  problemsSolved: number
}
type TagData = {
  advanced: Tag[]
  intermediate: Tag[]
  fundamental: Tag[]
}
const useLeetCodeTagCounts = (username: string) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<TagData>()
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    const fetchRecentAcSubmissions = async () => {
      setLoading(true)
      setError(null)
      try {
        const endpoint = 'https://leetcode.com/graphql/'
        const query = `
        query skillStats($username: String!) {
          matchedUser(username: $username) {
            tagProblemCounts {
              advanced {
                tagName
                tagSlug
                problemsSolved
              }
              intermediate {
                tagName
                tagSlug
                problemsSolved
              }
              fundamental {
                tagName
                tagSlug
                problemsSolved
              }
            }
          }
        }
        `
        const variables = {
          username,
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

        setResult(data.data.matchedUser.tagProblemCounts)
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

export default useLeetCodeTagCounts

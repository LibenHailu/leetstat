import React, { useState } from 'react'
import useLeetCodeRecentSubmissions from '../hooks/use-leetcode-recent-submissions'

interface Props {
  leetcodeHandle: string
}

const LeetCodeSubmissions: React.FC<Props> = ({ leetcodeHandle }) => {
  const { loading, result, error } = useLeetCodeRecentSubmissions(leetcodeHandle)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h4>Number of last week submissions</h4>
      {result ? (
        <h3>{`LeetCode: ${result.length} submissions`}</h3>
      ) : (
        <h3>No recent submissions found for {leetcodeHandle}</h3>
      )}
    </div>
  )
}

export default LeetCodeSubmissions

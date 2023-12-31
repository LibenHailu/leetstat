import React from 'react'
import useLeetCodeTagCounts from '../hooks/use-leetcode-tag-counts'

interface Props {
  leetcodeHandle: string
}
const LeetCodeTagCounts: React.FC<Props> = ({ leetcodeHandle }) => {
  const { loading, result, error } = useLeetCodeTagCounts(leetcodeHandle)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>Advanced</h2>
      <table>
        <tbody>
          {result?.advanced.map((tag, index) => {
            if (index % 2 !== 0) return null
            const next = result?.advanced[index + 1]

            return (
              <tr key={index}>
                <td>
                  <a
                    href={`https://leetcode.com/tag/${tag.tagSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tag.tagName}
                  </a>
                </td>
                <td>{tag.problemsSolved}</td>

                {next && (
                  <>
                    <td>
                      <a
                        href={`https://leetcode.com/tag/${next.tagSlug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {next.tagName}
                      </a>
                    </td>
                    <td>{next.problemsSolved}</td>
                  </>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>

      <h2>Intermediate</h2>
      <table>
        <tbody>
          {result?.intermediate.map((tag, index) => {
            if (index % 2 !== 0) return null
            const next = result?.intermediate[index + 1]

            return (
              <tr key={index}>
                <td>
                  <a
                    href={`https://leetcode.com/tag/${tag.tagSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tag.tagName}
                  </a>
                </td>
                <td>{tag.problemsSolved}</td>

                {next && (
                  <>
                    <td>
                      <a
                        href={`https://leetcode.com/tag/${next.tagSlug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {next.tagName}
                      </a>
                    </td>
                    <td>{next.problemsSolved}</td>
                  </>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>

      <h2>Fundamental</h2>
      <table>
        <tbody>
          {result?.fundamental.map((tag, index) => {
            if (index % 2 !== 0) return null
            const next = result?.fundamental[index + 1]

            return (
              <tr key={index}>
                <td>
                  <a
                    href={`https://leetcode.com/tag/${tag.tagSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tag.tagName}
                  </a>
                </td>
                <td>{tag.problemsSolved}</td>

                {next && (
                  <>
                    <td>
                      <a
                        href={`https://leetcode.com/tag/${next.tagSlug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {next.tagName}
                      </a>
                    </td>
                    <td>{next.problemsSolved}</td>
                  </>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default LeetCodeTagCounts

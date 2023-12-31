import React from 'react'

interface TagData {
  tagName: string
  tagSlug: string
  problemsSolved: number
}

interface Props {
  tagList: TagData[]
}

const TagTable: React.FC<Props> = ({ tagList }) => {
  //   const renderTableData = (tags: TagData[]) => {
  //     const halfLength = Math.ceil(tags.length / 2)

  //     return tags.map((tag, index) => {
  //       if (index < halfLength) {
  //         return (
  //           <tr key={index}>
  //             <td>
  //               <a
  //                 href={`https://leetcode.com/tag/${tag.tagSlug}`}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 {tag.tagName}
  //               </a>
  //             </td>
  //             <td>{tag.problemsSolved}</td>
  //             {/* Empty cell for spacing */}
  //             {index + halfLength < tags.length && <td></td>}
  //             {index + halfLength < tags.length && <td></td>}
  //           </tr>
  //         )
  //       } else {
  //         return null // Rows for the right column are rendered in the same loop iteration as the left column
  //       }
  //     })
  //   }

  return (
    // <div>
    //   <h2>LeetCode Tag Data</h2>
    //   <table>
    //     <tbody>{renderTableData(tagList)}</tbody>
    //   </table>
    // </div>
    <>{JSON.stringify(tagList[0])}</>
  )
}

export default TagTable

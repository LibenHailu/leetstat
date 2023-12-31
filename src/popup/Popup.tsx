// import { useState, useEffect } from 'react'

// import './Popup.css'

// export const Popup = () => {
//   const [count, setCount] = useState(0)
//   const link = 'https://github.com/guocaoyi/create-chrome-ext'

//   const minus = () => {
//     if (count > 0) setCount(count - 1)
//   }

//   const add = () => setCount(count + 1)

//   useEffect(() => {
//     chrome.storage.sync.get(['count'], (result) => {
//       setCount(result.count || 0)
//     })
//   }, [])

//   useEffect(() => {
//     chrome.storage.sync.set({ count })
//     chrome.runtime.sendMessage({ type: 'COUNT', count })
//   }, [count])

//   return (
//     <main>
//       <h2>Popup Page</h2>
//       <div className="calc">
//         <button onClick={minus} disabled={count <= 0}>
//           -
//         </button>
//         <label>{count}</label>
//         <button onClick={add}>+</button>
//       </div>
//       <a href={link} target="_blank">
//         generated by create-chrome-ext
//       </a>
//     </main>
//   )
// }

// export default Popup
import { useState, useEffect, useRef } from 'react'

import './Popup.css'
import useLeetCodeRecentSubmissions from '../hooks/use-leetcode-recent-submissions'
import LeetCodeSubmissions from '../components/leetcode-submissions'
import LeetCodeTagCounts from '../components/leetcode-tag-counts'

export const Popup = () => {
  const [leetcodeHandle, setLeetcodeHandle] = useState('')

  const leetcodeInputRef = useRef(null)

  useEffect(() => {
    chrome.storage.sync.get(['leetcodeHandle'], (result) => {
      if (result.leetcodeHandle) {
        setLeetcodeHandle(result.leetcodeHandle)
      }
    })
  }, [])

  const handleSubmit = () => {
    chrome.storage.sync.get(['leetcodeHandle'], (result) => {
      if (!result.leetcodeHandle) {
        const leetcodeHandle = leetcodeInputRef?.current?.value
        chrome.storage.sync.set({ leetcodeHandle })
        setLeetcodeHandle(leetcodeHandle)
      }
    })
  }

  // chrome.storage.sync.clear()
  return (
    <main>
      {!leetcodeHandle ? (
        <div className="input-container">
          <h2>Enter your LeetCode handle</h2>
          <input type="text" placeholder="Enter LeetCode handle" ref={leetcodeInputRef} />
          <button onClick={handleSubmit}>Save</button>
        </div>
      ) : (
        <>
          <h2>Welcome to LeetStat, {leetcodeHandle}!</h2>
          <LeetCodeSubmissions leetcodeHandle={leetcodeHandle} />
          <LeetCodeTagCounts leetcodeHandle={leetcodeHandle} />

          <p>Send a PR here !!!</p>
        </>
      )}
    </main>
  )
}

export default Popup

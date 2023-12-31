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

          <p>
            Send a PR
            <a
              href="https://github.com/LibenHailu/leetstat"
              target="_blank"
              style={{ cursor: 'pointer' }}
            >
              here
            </a>
            !!!
          </p>
        </>
      )}
    </main>
  )
}

export default Popup

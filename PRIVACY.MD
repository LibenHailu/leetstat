# Extension Privacy Policy

## Intro

Different extensions use personal data in different ways. This privacy policy encompasses general principles of how extensions I create collect and handle personal data. Individual extensions, when you first use them, will display their own unique privacy policies and ask you to agree to them before continued use.

## Data Collection

Leetstat doesn't collect any data at all. Since no data is collected, it stands to reason, and is, indeed, the case, that none of your data can be sold to third parties.

That being said, there are a few other ways your data is used.

## Chrome Storage API

Leetstat extention take advantage of [Google Chrome's Storage API](https://developers.chrome.com/extensions/storage) to locally store minimal state information. This is similar to a [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies). Examples of data stored this way might include your leetcode handle. However, this extensions only access this data locally on your machine and they do not transmit it.

## Third-Party APIs

Leetstat extension access third party API and report back the results. For example, when you use the extention it send your handle to [Leetcodes API](https://leetcode.com/graphql/) and recives infomation back about you past week problem solving status. Generally leetcode profile infomation is publically available information so it will send non-private information. However, when extensions access a third party API, there is some personal information that third party receives in the [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), most notably your [IP address](https://computer.howstuffworks.com/internet/basics/what-is-an-ip-address.htm) and [user agent string](https://developer.chrome.com/multidevice/user-agent). Some companies will use information like that to develop a “[browser fingerprint](https://pixelprivacy.com/resources/browser-fingerprinting/)" that can probably track and personally identify you. Unfortunately, this is not something that I or my extensions have control over. If this is a concern for you, consider using a VPN to mask your IP address.

## Feedback

If you have questions or concerns about this privacy policy, feel free to [send me an email](mailto:libenhailu04@gmail.com) or [file an issue](https://github.com/LibenHailu/leetstat/issues/new) to this repository.

---

---
title: Contributing
layout: docs
categories: ["Developers","Contributing"]
---

# How to Contribute

1. Welcome folks to the [community](http://vanillaforums.org/discussions) and be awesome!
2. Answer questions for the community.
3. File detailed issues on [GitHub](https://github.com/vanillaforums/vanilla) (see below).
4. [Triage](#triaging-issues) issues already reported!
4. Test [pre-releases](http://vanillaforums.org/categories/blog).
5. Contribute code via [pull requests](/developers/contributing/pull-requests) (requires [Contributor Agreement](http://vanillaforums.org/contributors))
6. Contribute revisions & additions to [docs](https://github.com/vanillaforums/VanillaDocs).
7. Help [translate Vanilla](/developers/locales) into your language.
8. Audit code for security issues & disclose issues [responsibly](/developers).
9. Contribute addons & themes to the [Official Directory](http://vanillaforums.org/addons).
10. Evaluate community addons & offer feedback and pull requests.

Sections of our contribution guidelines are adapted or copied from [Swift](https://swift.org/contributing/) because they are awesome.

## Reporting issues like a pro

First, check for duplicates by searching on GitHub. All clear? Then make sure you cover three points:

*  A concise description of the problem. If the issue is a fatal error, include a debug trace. Otherwise, describe the behavior you were expecting to see, along with the behavior you actually observed.

* A reproducible test case. If you need to include a lot of code to do this, make a gist on GitHub and link it.

* Include the precise Vanilla version number and any relevant system information (ex: OS, PHP version & settings, MySQL settings).

## Triaging issues

There are a number of things you can do to help triage issues in the issue tracker.

* Reproduce it! For a bug to be actionable, it needs to be reproducible. If you can’t reproduce the bug, try to figure out why. Get in touch with the submitter if you need more information.

* Reduce bugs. Once a bug can be reproduced, reduce it to the smallest amount of code possible. Reasoning about a sample that reproduces a bug in just a few lines of Swift code is easier than reasoning about a longer sample.

* Eliminate duplicates. If two bug reports refer to the same underlying problem, mark the newer one as a duplicate of the older one. Doing so allows others to work more effectively.

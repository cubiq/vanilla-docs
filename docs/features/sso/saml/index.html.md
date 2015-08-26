---
title: Single Sign-On with SAML
layout: docs
categories: ["Features","Single Sign-On","SAML"]
---

## SSO with SAML: Overview

Vanilla has implemented the parts of the SAML 2.0 spec required for SSO. This is done by enabling the SAMLSSO addon, and configuring it via its Settings page.

SAML accounts are mapped to existing forum accounts by **email address**, or a new account is created if no match is found.

Vanilla's SAML mapping is as follows:

```
userid
```


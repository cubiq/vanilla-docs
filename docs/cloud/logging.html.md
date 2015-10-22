---
title: Logging
layout: docs
categories: ["Cloud"]
---

# Advanced logging

Additional logging is available on our higher-tier plans for an additional fee to cover the additional load & performance hit incurred by more verbose logs.


## Events 

We are curently able to log the following additional events for auditing purposes. Please note these are stored and available upon request, but no interface is currently available in the Dashboard.

### Authentication & Permissions:

* signin_failure
* password_reset_failure
* password_reset_request
* password_reset
* password_change
* password_change_failure
* session_start
* session_end
* security_denied (any permission error)
* csrf_failure

### Privileged actions:

* theme_changed
* addon_enabled
* addon_disabled
* role_remove
* role_add
* security_access (admin/moderator-only actions)

### Outgoing requests:

* http_request
* http_response
* http_response_error

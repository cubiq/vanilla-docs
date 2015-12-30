---
title: "Page Links"
layout: docs
categories: ["Theming", "Smarty", "Smarty Functions"]
---

## Page Links

We've created dedicated Smarty functions for a number of links to Vanilla pages that make it easier to build your forum's navigation.

Here's the basic usage, where * is the link type.

```
{*_link wrap="string" text="string"}
```

### Parameters

Parameter | Type      | Default   | Description
---       | ---       | ---       | ---
`wrap`    | `string`  | `li`      | The tag to wrap the link in.
`text`    | `string`  | varies    | What the text for the link should be.

## Function: `{categories_link}`

Link to the categories page.

## Function: `{category_link}`

Link to the current category page.

## Function: `{dashboard_link}`

Link to the dashboard.

## Function: `{discussions_link}`

Link to the discussions page.

## Function: `{drafts_link}`

Link to the drafts page.

## Function: `{forum_root_link}`

Link to the forum root page.

## Function: `{home_link}`

Link to the home page.

## Function: `{inbox_link}`

Link to the inbox.

## Function: `{mydiscussions_link}`

Link to the My Discussions page.

## Function: `{nomobile_link}`

Link for showing the desktop version of the site.

## Function: `{photo_link}`

Link to the session's user profile that displays as the user's avatar.

## Function: `{profile_link}`

Link to session's user profile. The link text is the username. Includes a notification count.

## Function: `{signin_link}`

If there is a valid session, this outputs a sign out link, otherwise a sign in link.

## Function: `{signinout_link}`

If there is a valid session, this outputs a sign out link, otherwise a sign in link.

## Function: `{user_link}`

Link to session's user profile. The link text is this username. Does not include a notification count.

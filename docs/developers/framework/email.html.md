---
title: Email
layout: docs
categories: ["Developers","Framework"]
---

# Sending Emails

The Garden framework includes an Email object for sending and configuring emails. The formatting of Vanilla Emails is handled by the EmailTemplate property of the Email object.

## EmailTemplate

The EmailTemplate object helps to organize the components of an email and prepare them for output.

These components are:

* **Title**: An HTML-formatted or plaintext string.
* **Lead**: An HTML-formatted or plaintext string.
* **Message**: An HTML-formatted or plaintext string.
* **Footer**: A collection of key/values including the footer text, and the background color and text color.
* **Button**: A collection of key/values including the button text, the url, and the background color and text color.
* **Image**: A collection of key/values including the image source url, the link url and alt text.

An email can contain any or none of the above components.

These components are properties on the EmailTemplate object and can be set using the corresponding setter method.

The EmailTemplate object also has a set of colors that can be used in the template view for background colors and text colors.

### EmailTemplate View

The layout and use of the HTML EmailTemplate components is left up to the view. Vanilla provides a basic Smarty template with inline css styles for rendering.

A plugin or theme could specify a new php or Smarty template view using the setView() method on the EmailTemplate or by overriding the email-basic.tpl view.

For more info on overriding view from a plugin or theme, check out our [docs on overriding views in a theme](/theming/views). The same principles found there can be used to override a view in a plugin.

### Default EmailTemplate Values

The default color and image values for your application's email can be uploaded and configured from the Email settings page in the dashboard. These values can be overridden by explicitly setting the values in the setButton() or setImage() methods of an individual email's EmailTemplate.

## Setting Up an Email

Here's an example of setting up a basic email in Vanilla:

```php
// Set up the email object
$emailer = new Gdn_Email();
$emailer->to('foo@bar.com');
$emailer->subject('Email Subject');

// Configure the EmailTemplate object
$email = $emailer->getEmailTemplate();
$email->setTitle('Email Title')
    ->setLead('Read this exciting email...')
    ->setMessage('Email body')
    // Overrides the default button colors
    ->setButton(externalUrl('/'), 'Check it out', '#ff0000', '#ffff00')
    // Overrides the default image.
    ->setImage('http://foobar.com/image.png', externalUrl('/'), 'Image')
    ->setFooter('Footer text');

// Set the configured EmailTemplate
$emailer->setEmailTemplate($email);

// All set to send!
$emailer->send();
```

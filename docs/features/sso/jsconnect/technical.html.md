---
title: Implementing jsConnect
layout: docs
categories: ["Features","Single Sign-On","jsConnect"]
---

jsConnect uses javascript to allow cross-domain single-signon with another site. This is useful if you have members registered on your site and you don't want them to have to re-register in Vanilla.
<h2>How does jsConnect work?</h2>
In order for jsConnect to work you'll have to put some code on your site that identifies your users in a way that Vanilla can understand. Vanilla then requests this information when the user wants to sign in and synchronizes the user with Vanilla. In order to make this request for information Vanilla uses technology called <a title="Overview of jsonp" href="http://en.wikipedia.org/wiki/JSONP" target="_blank">jsonp</a>. This allows us to send your cookies from your site to you and obtain login information.

This is the basic story of jsConnect, but it gets a bit more complicated than that in actual implementation because the information must be secured. We do this by sharing a secret key with your site and using it to sign requests so we know it comes from you.
<h2>Two Flavours of jsConnect SSO</h2>
There are two implementations of SSO that jsConnect supports. You can implement either of the methods or both as they serve different purposes.
<h3>Method 1: Site-Wide SSO</h3>
You implement site-wide SSO when Vanilla is as a full site. With this method you need to create a page that provides your login information in jsonp format.
<h3>Method 2: Embedded SSO</h3>
Vanilla also has the ability to be embedded in an html page either as an entire site or just as embedded comments. With this scenario you need to create a special SSO string that can be passed to the embedded Vanilla and provide login information.
<h2>Wordpress Plugin</h2>
If your site is using Wordpress then we make a plugin that allows you to use SSO with your Wordpress site. It also helps you set up an embedded forum and embedded comments on your site. You can get the plugin <a title="Vanilla Forums Wordpress Plugin" href="http://wordpress.org/extend/plugins/vanilla-forums/" target="_blank">here</a>.
<h2 id="libraries">jsConnect Client Libraries</h2>
While writing the client code for jsConnect is pretty straightforward, it can be a little bit difficult to secure the connection. Because of this we provide client libraries for four of the more popular languages. <strong>If we provide a client library that you can use then we highly recommend using it.</strong>

All of these libraries are open source and maintained on github:
<ul>
	<li><a title="PHP jsConnect client library" href="https://github.com/vanillaforums/jsConnectPHP">PHP jsConnect client library</a></li>
	<li><a title="Ruby jsConnect client library" href="https://github.com/vanillaforums/jsConnectRuby">Ruby jsConnect client library</a></li>
	<li><a title="Java jsConnect client library" href="https://github.com/vanillaforums/jsConnectJava">Java jsConnect client library</a></li>
	<li><a title=".NET jsConnect client library" href="https://github.com/vanillaforums/jsConnectdotNet">.NET jsConnect client library</a></li>
</ul>
All of these libraries have one file with all of the library code you'll need and one file that gives an example usage. They also have a readme that tells you which file is which. <em>Please note that these libraries don't yet support embedded SSO.</em>
<h2>Manually Implementing jsConnect</h2>
If your site is programmed in a language that doesn't have a client library then we provide documentation on our jsConnect protocol. Have a look at the jsConnect technical documentation <a title="jsConnect Technical Documentation Part 1: Site-Wide SSO" href="http://blog.vanillaforums.com/implementing-jsconnect/jsconnect-technical-documentation/">part 1</a> and <a title="jsConnect Technical Documentation Part 2: Embedded SSO" href="http://blog.vanillaforums.com/jsconnect-technical-documentation-for-embedded-sso/">part 2</a>.
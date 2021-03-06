# jViewport v0.4.2

## What is jViewport?

jViewport is a jQuery plugin to aid in responsive design. It allows you to see the width of the window in real time. If you adjust the widow size, it will auto update with the correct measurements. jViewport will also display a device that the current width is in range of.

## Demo

View a demo at http://cibgraphics.com/workshop/jviewport/

## Any dependencies?

Just jQuery.

## Ok, good to go. How do I use it?

Grab the latest copy from Github and include it into your website.

After that just initialize it. No selector is needed. It will do everything by itself.

<pre>
  $(function() {

    $.jviewport();

  });
</pre>

You should now be up and running. No additional files like images or css needed.

## Options

Any good plugin has options, and while jViewport can run just fine without setting anything, you can customize it to your needs.

Apply settings like this:

<pre>
  $(function() {

    $.jviewport({
      setting: value
    });

  });
</pre>

Below are a list of options what value they take and what the default setting is.

<table>
  <tr>
    <th>Option</th><th>Argument Type</th><th>Default</th><th>Description</th>
  </tr>
  <tr>
    <td>selector</td><td>string</td><td>body</td><td>Where the plugin will append the information to</td>
  </tr>
  <tr>
    <td>position</td><td>string</td><td>fixed</td><td>CSS Argument as to what position style the information will be</td>
  </tr>
  <tr>
    <td>backgroundColor</td><td>string</td><td>#333</td><td>Background color of the information</td>
  </tr>
  <tr>
    <td>fontSize</td><td>integer</td><td>11</td><td>Font size</td>
  </tr>
  <tr>
    <td>textColor</td><td>string</td><td>#85afc3</td><td>Text color</td>
  </tr>
  <tr>
    <td>height</td><td>integer</td><td>25</td><td>Height of the container. Also controls line-height</td>
  </tr>
  <tr>
    <td>display</td><td>boolean</td><td>true</td><td>Displays container. Setting to false turns the plugin off</td>
  </tr>
	<tr>
    <td>device</td><td>boolean</td><td>true</td><td>(NEW) If true, displays the device the current width is in range of</td>
  </tr>
</table>

## Changelog

Version 0.5
* Better calculation of Viewport
* Better font display
* Better rendering if user has margin or padding on HTML or Body elements
* Better rendering if page has vertical scrollbars or not

Version 0.4.2
* Fixed wrong size for Kindle Fire

Version 0.4.1
* Fixed device calculation
* Fixed device names

Version 0.4
* New Feature: Device ranges
* Updated default text color
* Took out double window resize call

Version 0.3
* Added options

Version 0.2
* Self running plugin

Version 0.1
* Initial code

## Wish List Features

This is more of a wish list and doesn't really say what I am currently working on
* Toggle button for Firefox's Responsive Design Tool
* Feature to mimic Firefox's Responsive Design Tool but have it work in all modern browsers
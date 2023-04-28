# php

2021-01-06 

## Today, I learned : PHP tutorials
>Bookmark : [javaTpoint (magic-constants)](https://www.javatpoint.com/php-magic-constants) / [tutorialsPoint (intro)](https://www.tutorialspoint.com/php/index.html)

<html><hr/></html>

### 0. PHP
#### 1) echo statement
* can have multiple input variables, separated by comma(,)s.
#### 2) PHP properties
* **interpreted language** (don't need compilers and such)
* **faster** than other scripting languages
* can be **embedded** into HTML.
* **object-oriented**.
* can create **sessions**.
* can **access / set cookies**.
* PHP is a **secure language** to develop the website. It consists of multiple layers of security to prevent threads and malicious attacks.

<html><hr/></html>

### 1. variable rules
* variable name starts with alphabet or underscore(_).
* variable name is case-sensitive.
![](/img/images_2ood_post_d75ce67a-80da-412a-b807-867e06271150_image.png)
* variable name starts with $ sign. constants doesn't.
![](/img/images_2ood_post_20bc6008-c3c1-434d-9672-7cec86465198_image.png)
* static variable is stored dynamically and used globally.
![](/img/images_2ood_post_76bf8ae0-f570-431e-b988-284a29899ff4_image.png)

<html><hr/></html>

### 2. special variable properties
#### 1)double-dollar ($$)
PHP supports variable name as a variable. 
![](/img/images_2ood_post_9164cc17-7525-4c4a-95e7-50e1a5b8130d_image.png)

<hr/>
2021.01.07

> bookmark : <a href='https://www.javatpoint.com/php-form' target='_blank'>javatpoint-phpForm</a>

## 1.special Variables 
* special variable starts and ends with double underscore(__).
* **case insensitive.**
* resolved at compile-time.

![](/img/images_2ood_post_e77bc0b3-75de-445b-80fe-4d5a2dd6efde_image.png)

## 2. Array Definintion
![](/img/images_2ood_post_c2da604e-c94d-4fb3-b2ed-a9a5ad80a1c0_image.png)

## 3. execution passage
* wrap the shell code with \` **(shft+"~").**

![](/img/images_2ood_post_ab774c7f-9b87-4ff9-97e9-7a149d005225_image.png)

result : root

## 4. call by reference
* put **ampersand(&)** before the variable name.

![](/img/images_2ood_post_71682c72-81ac-4bbe-bfe3-02669723ae5a_image.png)

result : Hello Call By Reference

## 5. parameter default value
![](/img/images_2ood_post_c9d8be12-a1ae-4df3-ae04-9d10a12e36ca_image.png)

result : Hello Rajesh Hello Sonoo Hello John

## 6. Associative Array & traversing
![](/img/images_2ood_post_cdbe520d-3897-4691-b167-5bf27142195a_image.png)
result :
Key: Sonoo Value: 550000
Key: Vimal Value: 250000
Key: Ratan Value: 200000
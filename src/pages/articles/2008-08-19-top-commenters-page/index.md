---
path: "top-commenters-page"
title: "Top Commenters Page with MySQL and PHP"
description: "Using CakePHP and jQuery, I added a 'Top Commenters' page to my website."
tags: 
  - "MySQL"
  - "PHP"
  - "PHP & CakePHP"
date: "2008-08-19T06:29:12.000Z"
draft: false
category: "test"
layout: "post"
---

My old website had a "top commenters" page. !http://marcgrabanski.com/img/logo-mysql.jpg! To get the top commenter count I have to thank "Ryan Peterson":https://twitter.com/therpeterson in helping me write this custom MySQL query.I used @Group By@ to lump the results together based on the commenter's email address. Then use @count(*)@ to count the number of records in the group. Also used the @NOT@ function in MySQL to filter my email address. \[code lang="mysql"\] SELECT \`Comment\`.\`author\`, \`Comment\`.\`id\`, \`Comment\`.\`url\`, count(*) AS \`count\` FROM \`cake_comments\` AS \`Comment\` WHERE 1 = 1 AND NOT(\`Comment\`.\`email\`='m@marcgrabanski.com') GROUP BY \`Comment\`.\`email\` ORDER BY \`count\` DESC LIMIT 0, 10 \[/code\] Since I didn't want to load all of the related comments at once, I decied to use a little jQuery and Ajax to show comments that they have made. !http://marcgrabanski.com/img/jQuery-logo.gif! First, I put a @span@ tag around the comment count, because without JavaScript you won't see this functionality. On page load I swapped the spans into links with @$(this).replaceWith('' \+ $(this).html() + '');@. Instead adding behavior later after append, I used a jQuery object inside @replaceWith@ so I can attach behavior to the link and I like how the code looks. \[code lang="js"\] $(this).replaceWith( $('' + $(this).html() + '').click(function(){ ... }) ); \[/code\] Using CakePHP's JavaScript object generator, @$javascript->object($data);@ it was easy to send JSON back to the client and parse with jQuery. Here is the full source of the JavaScript file. \[code lang="js"\] $(document).ready(function(){ $('.get_comments').each(function(){ $(this).replaceWith( $(''+$(this).html()+'').click(function(){ link = $(this); $.post('comments/get/comments', { 'data\[Comment\]\[id\]': $(this).siblings('.author').attr('id') }, function(data){ out = ''; for (i in data) { prefix = data\[i\].Article.type ? 'article/' : 'answers/'; out += '*   [' \+ data\[i\].Article.title + '](' + prefix + data[i].Article.slug + '#c' + data[i].Comment.id + ')' \+ data\[i\].Comment.created + '
'; } $('

' \+ out + '

').hide().appendTo(link.parents('li:first')).slideDown(); $(link).replaceWith( $(link).html() ); }, 'json'); }) ); }); }); \[/code\] bq. Update: I think I'll post the CakePHP code just in case someone is interested. Here is the controller, I use the RequestHandler component @var $components = array('RequestHandler');@ and the Time helper @var $helpers = array('Time');@ in the top of the controller. !http://marcgrabanski.com/img/logo-cakephp.gif! \[code lang="php"\] function get($type = null) { if ($this->RequestHandler->isAjax()) { Configure::write('debug', 0); if ($type == 'comments') { $comment = $this->Comment->read(array('Comment.email'), $this->data\['Comment'\]\['id'\]); $results = $this->Comment->find('all', array( 'conditions' => array( 'email' => $comment\['Comment'\]\['email'\]), 'fields' =>'Article.title, Article.slug, Article.type, Comment.id, Comment.created' )); $this->set(compact('results')); } } } \[/code\] I also turn debug off with @Configure::write('debug', 0);@. Also, I only use @$type@ so that I can setup my code to get types of data if I want later - more of a design pattern I typically follow. Then in my view I use the time helper and output a JSON object. \[code lang="php"\] timeAgoInWords($result\['Comment'\]\['created'\]); endif; echo $javascript->object($results); ?> \[/code\] This page no longer exists, sorry.
<?php
if (User::$id):
    echo '<span id="toplinks-favorites"><a class="hassubmenu"></a>|</span>';
    echo '<a id="toplinks-user">'.User::$displayName.'</a>';
    echo '<span id="toplinks-rep" title="'.Lang::main('reputationTip').'">(<a href="?reputation">'.User::getReputation().'</a>)</span>';
else:
    echo '<a href="?account=signin">'.Lang::main('signIn').'</a>';
endif;
?>
|<a href="https://wow-vision.ru/forum/">Форум</a>|<a href="https://wow-vision.ru/">Сайт</a>

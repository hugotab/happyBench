

$('.show').click(function() {
    // this: c'est le bouton sur lequel tu cliques.
    // quand tu fais $('.show').click(function() => à l'interieur de la fonction this correspond à l'element $('.show')
    // donc  quand tu fais $('.hide').click(function() => à l'interieur de la fonction this correspond à l'element à $('.hide')
    // ce qui veut dire que dans chaque function() this = l'element sur lequel est attaché l'événement

    var parent = $(this).parent('.resume-text'); //trouve le parent de class='resume-text' au desssus de this
    $(parent).find('.data').show(); // on part du parent de class=resumeText et on récupère l'enfant de classe '.data' et on l'affiche
    $(parent).find('.hide').show(); // on part du parent de class=resumeText et on récupère l'enfant de classe '.hide' et on l'affiche
    $(parent).find('.show').hide(); // on part du parent de class=resumeText et on récupère l'enfant de classe '.show' et on le masque
});

$('.hide').click(function() {
    // this: c'est le bouton sur lequel tu cliques.
    // quand tu fais $('.show').click(function() => à l'interieur de la fonction this correspond à l'element $('.show')
    // donc  quand tu fais $('.hide').click(function() => à l'interieur de la fonction this correspond à l'element à $('.hide')
    // ce qui veut dire que dans chaque function() this = l'element sur lequel est attaché l'événement

    var parent = $(this).parent('.resume-text'); //trouve le parent de class='resume-text' au desssus de this
    $(parent).find('.data').hide(); // on part du parent de class=resumeText et on récupère l'enfant de classe '.data' et on l'affiche
    $(parent).find('.hide').hide(); // on part du parent de class=resumeText et on récupère l'enfant de classe '.hide' et on l'affiche
    $(parent).find('.show').show(); // on part du parent de class=resumeText et on récupère l'enfant de classe '.show' et on le masque
});

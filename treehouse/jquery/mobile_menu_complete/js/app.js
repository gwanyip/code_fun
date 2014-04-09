//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

// 1. Create a select and append to #menu
var $select = $("<select></select>")
$("#menu").append($select);
// 2. Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);

  // 2.1 Create an option
  var $option = $("<option></option>");

  // Deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true );
  }

  // 2.2 Option's value is the href
  $option.val($anchor.attr("href"));
  // 2.3 Option's text is the text of link
  $option.text($anchor.text());
  // 2.4 Append option to select
  $select.append($option)
});

// Bind change listener to select
  

  $select.change(function(){
    // 3.2 Go to select's location
    window.location = $select.val();
  })

















// //Create a select and append to #menu
// var $select = $("<select></select>");
// $("#menu").append($select);

// //Cycle over menu links
// $("#menu a").each(function(){
//   var $anchor = $(this);
//   //Create an option
//   var $option = $("<option></option>");

//   //Deal with selected options depending on current page
//   if($anchor.parent().hasClass("selected")) {
//     $option.prop("selected", true);
//   }
//   //option's value is the href
//   $option.val($anchor.attr("href"));
//   //option's text is the text of link
//   $option.text($anchor.text());
//   //append option to select
//   $select.append($option);
// });

// //Bind change listener to the select
// $select.change(function(){
//   //Go to select's location
//   window.location = $select.val();
// });









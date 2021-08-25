/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" */




const domainName = (url) => {
  let domain;

 if (url.indexOf("://") > -1) {
   domain = url.split('/')[2];
 } else {
   domain = url.split('/')[0];
 }
 if (domain.indexOf("www.") > -1) { 
   domain = domain.split('www.')[1];
 }
 
domain = domain.split('.')[0];
 return domain;
}
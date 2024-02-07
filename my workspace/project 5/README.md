//  api key below


// This endpoint suits article discovery and analysis.
//const baseUrl = `https://newsapi.org/v2/everything?q=trump&sortBy=relevancy&apiKey=${APIKEY}`
// request parameters for everything url

// Keywords or a phrase to search for.
// q=


/*This parameter is useful if 
you have an edge case where searching all the
fields is not giving the desired outcome,
 but generally you should not need to set this.*/
// searchIn
// possible options are [title, description, content]


/*The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
relevancy = articles more closely related to q come first.
popularity = articles from popular sources and publishers come first.
publishedAt = newest articles come first.
*/
// sortBy
// possible options are [relevancy, popularity, publishedAt]


/*A comma-seperated string of identifiers (maximum 20)
 for the news sources or blogs you want headlines from.
 Use the /sources endpoint to locate these programmatically or look at the sources index.*/
// sources

// This endpoint is great for retrieving headlines for use with news tickers or similar.


// request parameters for top headlines url


/* The 2-letter ISO 3166-1 code of the country you want to get headlines for */
// country
/* possible options are [ae, ar, at, au, be, bg, br, ca, ch, cn, co, 
  cu, cz, de, eg, fr, gb, gr, hk, hu, id, ie, il, in, it, jp, kr, 
  lt, lv, ma, mx, my, ng, nl, no, nz, ph, pl, pt, ro, rs, ru, sa, se, sg, si, sk,
   th, tr, tw, ua, us, ve, za] */

{ae: United Arab Emirates},
{ar: Argentina},
{at: Austria},
{au: Australia},
{be: Belgium},
{bg: Bulgaria},
{br: Brazil},
{ca: Canada},
{ch: Switzerland},
{cn: China},
{co: Colombia},
{cu: Cuba},
{cz: Czech Republic},
{de: Germany},
{eg: Egypt},
{fr: France},
{gb: United Kingdom},
{gr: Greece},
{hk: Hong Kong},
{hu: Hungary},
{id: Indonesia},
{ie: Ireland},
{il: Israel},
{in: India},
{it: Italy},
{jp: Japan},
{kr: South Korea},
{lt: Lithuania},
{lv: Latvia},
{ma: Morocco},
{mx: Mexico},
{my: Malaysia},
{ng: Nigeria},
{nl: Netherlands},
{no: Norway},
{nz: New Zealand},
{ph: Philippines},
{pl: Poland},
{pt: Portugal},
{ro: Romania},
{rs: Serbia},
{ru: Russia},
{sa: Saudi Arabia},
{se: Sweden},
{sg: Singapore},
{si: Slovenia},
{sk: Slovakia},
{th: Thailand},
{tr: Turkey},
{tw: Taiwan},
{ua: Ukraine},
{us: United States},
{ve: Venezuela},
{za: South Africa},



/* The category you want to get headlines for */
//  category
// possible options are
/* business
entertainment
general
health
science
sports
technology */

// Keywords or a phrase to search for.
// q

/* A comma-seperated string of identifiers for the news sources or blogs you want headlines from.
 Use the /top-headlines/sources endpoint to locate these programmatically or look at the sources index
. Note: you can't mix this param with the country or category params */
// sources

// const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;

/*const author = article.author;
const content = article.content;
const description = article.description;
const title = article.title;
const linkToCompleteArticle = article.url;
const newsSource = article.source.name;
const coverImage = article.urlToImage;
const datePublished = article.publishedAt.slice(0, 10);
const timePublished = article.publishedAt.slice(11, 16);
const addAmPm = timePublished.slice(0, 2);*/
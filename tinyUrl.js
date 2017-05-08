/**
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var code2url = [];
var url2code = [];
var encode = function(longUrl) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    var i=0;
    var short_code = '';
    if(url2code[longUrl] === undefined)
    {
        while(i<6)
        {
            short_code += alphabet[~~(Math.random() * 62)]; 
            i++;
        }
        if(code2url[short_code] === undefined)
        {
            code2url[short_code] = longUrl;
            url2code[longUrl] = short_code;
        }
    }
    
    return "http://tinyurl.com/"+url2code[longUrl];
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    var short_code = shortUrl.substr(-6);
    return code2url[short_code];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
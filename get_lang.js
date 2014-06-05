/***********************************************
 * get_lang.js - node.js language parser       *
 *                                             *
 * Author: Kreg Hanning, 2014                  *
 *                                             *
 * echo's the 2 digit language code            *
 * the 'accept-language' header                *
 ***********************************************/

var http = require( 'http' );
http.createServer( function( req, res ) {
    res.writeHead( 200, {'Content-Type': 'application/json'} );
    var lang = req.headers[ 'accept-language' ].substring( 0, 2 );
    if ( req.url.indexOf( 'callback' ) > -1 ) {
        var callback = req.url.match( /callback=(.*)&/ )[ 1 ];
        res.end( callback + '(' + JSON.stringify(lang) + ');' );
    } else {
        res.end( lang );
    }
}).listen( 52000,'0.0.0.0' );

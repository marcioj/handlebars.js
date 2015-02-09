/* jshint ignore:start */
/* istanbul ignore next */
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"content":12,"COMMENT":13,"CONTENT":14,"openRawBlock":15,"END_RAW_BLOCK":16,"OPEN_RAW_BLOCK":17,"helperName":18,"openRawBlock_repetition0":19,"openRawBlock_option0":20,"CLOSE_RAW_BLOCK":21,"openBlock":22,"block_option0":23,"closeBlock":24,"openInverse":25,"block_option1":26,"OPEN_BLOCK":27,"openBlock_repetition0":28,"openBlock_option0":29,"openBlock_option1":30,"CLOSE":31,"OPEN_INVERSE":32,"openInverse_repetition0":33,"openInverse_option0":34,"openInverse_option1":35,"openInverseChain":36,"OPEN_INVERSE_CHAIN":37,"openInverseChain_repetition0":38,"openInverseChain_option0":39,"openInverseChain_option1":40,"inverseAndProgram":41,"INVERSE":42,"inverseChain":43,"inverseChain_option0":44,"OPEN_ENDBLOCK":45,"path":46,"OPEN":47,"mustache_repetition0":48,"mustache_option0":49,"OPEN_UNESCAPED":50,"mustache_repetition1":51,"mustache_option1":52,"CLOSE_UNESCAPED":53,"OPEN_PARTIAL":54,"partialName":55,"partial_repetition0":56,"partial_option0":57,"param":58,"STRING":59,"NUMBER":60,"BOOLEAN":61,"dataName":62,"sexpr":63,"OPEN_SEXPR":64,"sexpr_repetition0":65,"sexpr_option0":66,"CLOSE_SEXPR":67,"hash":68,"hash_repetition_plus0":69,"hashSegment":70,"ID":71,"EQUALS":72,"blockParams":73,"OPEN_BLOCK_PARAMS":74,"blockParams_repetition_plus0":75,"CLOSE_BLOCK_PARAMS":76,"DATA":77,"pathSegments":78,"SEP":79,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",13:"COMMENT",14:"CONTENT",16:"END_RAW_BLOCK",17:"OPEN_RAW_BLOCK",21:"CLOSE_RAW_BLOCK",27:"OPEN_BLOCK",31:"CLOSE",32:"OPEN_INVERSE",37:"OPEN_INVERSE_CHAIN",42:"INVERSE",45:"OPEN_ENDBLOCK",47:"OPEN",50:"OPEN_UNESCAPED",53:"CLOSE_UNESCAPED",54:"OPEN_PARTIAL",59:"STRING",60:"NUMBER",61:"BOOLEAN",64:"OPEN_SEXPR",67:"CLOSE_SEXPR",71:"ID",72:"EQUALS",74:"OPEN_BLOCK_PARAMS",76:"CLOSE_BLOCK_PARAMS",77:"DATA",79:"SEP"},
productions_: [0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[12,1],[10,3],[15,5],[9,4],[9,4],[22,6],[25,6],[36,6],[41,2],[43,3],[43,1],[24,3],[8,5],[8,5],[11,5],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[63,5],[68,1],[70,3],[73,3],[18,1],[18,1],[18,1],[18,1],[55,1],[55,1],[62,2],[46,1],[78,3],[78,1],[6,0],[6,2],[19,0],[19,2],[20,0],[20,1],[23,0],[23,1],[26,0],[26,1],[28,0],[28,2],[29,0],[29,1],[30,0],[30,1],[33,0],[33,2],[34,0],[34,1],[35,0],[35,1],[38,0],[38,2],[39,0],[39,1],[40,0],[40,1],[44,0],[44,1],[48,0],[48,2],[49,0],[49,1],[51,0],[51,2],[52,0],[52,1],[56,0],[56,2],[57,0],[57,1],[65,0],[65,2],[66,0],[66,1],[69,1],[69,2],[75,1],[75,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2:this.$ = new yy.Program($$[$0], null, {}, yy.locInfo(this._$));
break;
case 3:this.$ = $$[$0];
break;
case 4:this.$ = $$[$0];
break;
case 5:this.$ = $$[$0];
break;
case 6:this.$ = $$[$0];
break;
case 7:this.$ = $$[$0];
break;
case 8:this.$ = new yy.CommentStatement(yy.stripComment($$[$0]), yy.stripFlags($$[$0], $$[$0]), yy.locInfo(this._$));
break;
case 9:this.$ = new yy.ContentStatement($$[$0], yy.locInfo(this._$));
break;
case 10:this.$ = yy.prepareRawBlock($$[$0-2], $$[$0-1], $$[$0], this._$);
break;
case 11:this.$ = { path: $$[$0-3], params: $$[$0-2], hash: $$[$0-1] };
break;
case 12:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], false, this._$);
break;
case 13:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], true, this._$);
break;
case 14:this.$ = { path: $$[$0-4], params: $$[$0-3], hash: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-5], $$[$0]) };
break;
case 15:this.$ = { path: $$[$0-4], params: $$[$0-3], hash: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-5], $$[$0]) };
break;
case 16:this.$ = { path: $$[$0-4], params: $$[$0-3], hash: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-5], $$[$0]) };
break;
case 17:this.$ = { strip: yy.stripFlags($$[$0-1], $$[$0-1]), program: $$[$0] };
break;
case 18:
    var inverse = yy.prepareBlock($$[$0-2], $$[$0-1], $$[$0], $$[$0], false, this._$),
        program = new yy.Program([inverse], null, {}, yy.locInfo(this._$));
    program.chained = true;

    this.$ = { strip: $$[$0-2].strip, program: program, chain: true };
  
break;
case 19:this.$ = $$[$0];
break;
case 20:this.$ = {path: $$[$0-1], strip: yy.stripFlags($$[$0-2], $$[$0])};
break;
case 21:this.$ = yy.prepareMustache($$[$0-3], $$[$0-2], $$[$0-1], $$[$0-4], yy.stripFlags($$[$0-4], $$[$0]), this._$);
break;
case 22:this.$ = yy.prepareMustache($$[$0-3], $$[$0-2], $$[$0-1], $$[$0-4], yy.stripFlags($$[$0-4], $$[$0]), this._$);
break;
case 23:this.$ = new yy.PartialStatement($$[$0-3], $$[$0-2], $$[$0-1], yy.stripFlags($$[$0-4], $$[$0]), yy.locInfo(this._$));
break;
case 24:this.$ = $$[$0];
break;
case 25:this.$ = new yy.StringLiteral($$[$0], yy.locInfo(this._$));
break;
case 26:this.$ = new yy.NumberLiteral($$[$0], yy.locInfo(this._$));
break;
case 27:this.$ = new yy.BooleanLiteral($$[$0], yy.locInfo(this._$));
break;
case 28:this.$ = $$[$0];
break;
case 29:this.$ = $$[$0];
break;
case 30:this.$ = new yy.SubExpression($$[$0-3], $$[$0-2], $$[$0-1], yy.locInfo(this._$));
break;
case 31:this.$ = new yy.Hash($$[$0], yy.locInfo(this._$));
break;
case 32:this.$ = new yy.HashPair($$[$0-2], $$[$0], yy.locInfo(this._$));
break;
case 33:this.$ = $$[$0-1];
break;
case 34:this.$ = $$[$0];
break;
case 35:this.$ = $$[$0];
break;
case 36:this.$ = new yy.StringLiteral($$[$0], yy.locInfo(this._$)), yy.locInfo(this._$);
break;
case 37:this.$ = new yy.NumberLiteral($$[$0], yy.locInfo(this._$));
break;
case 38:this.$ = $$[$0];
break;
case 39:this.$ = $$[$0];
break;
case 40:this.$ = yy.preparePath(true, $$[$0], this._$);
break;
case 41:this.$ = yy.preparePath(false, $$[$0], this._$);
break;
case 42: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
break;
case 43:this.$ = [{part: $$[$0]}];
break;
case 44:this.$ = [];
break;
case 45:$$[$0-1].push($$[$0]);
break;
case 46:this.$ = [];
break;
case 47:$$[$0-1].push($$[$0]);
break;
case 54:this.$ = [];
break;
case 55:$$[$0-1].push($$[$0]);
break;
case 60:this.$ = [];
break;
case 61:$$[$0-1].push($$[$0]);
break;
case 66:this.$ = [];
break;
case 67:$$[$0-1].push($$[$0]);
break;
case 74:this.$ = [];
break;
case 75:$$[$0-1].push($$[$0]);
break;
case 78:this.$ = [];
break;
case 79:$$[$0-1].push($$[$0]);
break;
case 82:this.$ = [];
break;
case 83:$$[$0-1].push($$[$0]);
break;
case 86:this.$ = [];
break;
case 87:$$[$0-1].push($$[$0]);
break;
case 90:this.$ = [$$[$0]];
break;
case 91:$$[$0-1].push($$[$0]);
break;
case 92:this.$ = [$$[$0]];
break;
case 93:$$[$0-1].push($$[$0]);
break;
}
},
table: [{3:1,4:2,5:[2,44],6:3,13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],47:[2,44],50:[2,44],54:[2,44]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:[1,11],14:[1,18],15:16,17:[1,21],22:14,25:15,27:[1,19],32:[1,20],37:[2,2],42:[2,2],45:[2,2],47:[1,12],50:[1,13],54:[1,17]},{1:[2,1]},{5:[2,45],13:[2,45],14:[2,45],17:[2,45],27:[2,45],32:[2,45],37:[2,45],42:[2,45],45:[2,45],47:[2,45],50:[2,45],54:[2,45]},{5:[2,3],13:[2,3],14:[2,3],17:[2,3],27:[2,3],32:[2,3],37:[2,3],42:[2,3],45:[2,3],47:[2,3],50:[2,3],54:[2,3]},{5:[2,4],13:[2,4],14:[2,4],17:[2,4],27:[2,4],32:[2,4],37:[2,4],42:[2,4],45:[2,4],47:[2,4],50:[2,4],54:[2,4]},{5:[2,5],13:[2,5],14:[2,5],17:[2,5],27:[2,5],32:[2,5],37:[2,5],42:[2,5],45:[2,5],47:[2,5],50:[2,5],54:[2,5]},{5:[2,6],13:[2,6],14:[2,6],17:[2,6],27:[2,6],32:[2,6],37:[2,6],42:[2,6],45:[2,6],47:[2,6],50:[2,6],54:[2,6]},{5:[2,7],13:[2,7],14:[2,7],17:[2,7],27:[2,7],32:[2,7],37:[2,7],42:[2,7],45:[2,7],47:[2,7],50:[2,7],54:[2,7]},{5:[2,8],13:[2,8],14:[2,8],17:[2,8],27:[2,8],32:[2,8],37:[2,8],42:[2,8],45:[2,8],47:[2,8],50:[2,8],54:[2,8]},{18:22,46:23,59:[1,25],60:[1,26],62:24,71:[1,29],77:[1,28],78:27},{18:30,46:23,59:[1,25],60:[1,26],62:24,71:[1,29],77:[1,28],78:27},{4:31,6:3,13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],37:[2,44],42:[2,44],45:[2,44],47:[2,44],50:[2,44],54:[2,44]},{4:32,6:3,13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],42:[2,44],45:[2,44],47:[2,44],50:[2,44],54:[2,44]},{12:33,14:[1,18]},{18:35,46:23,55:34,59:[1,25],60:[1,26],62:24,63:36,64:[1,37],71:[1,29],77:[1,28],78:27},{5:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],27:[2,9],32:[2,9],37:[2,9],42:[2,9],45:[2,9],47:[2,9],50:[2,9],54:[2,9]},{18:38,46:23,59:[1,25],60:[1,26],62:24,71:[1,29],77:[1,28],78:27},{18:39,46:23,59:[1,25],60:[1,26],62:24,71:[1,29],77:[1,28],78:27},{18:40,46:23,59:[1,25],60:[1,26],62:24,71:[1,29],77:[1,28],78:27},{31:[2,74],48:41,59:[2,74],60:[2,74],61:[2,74],64:[2,74],71:[2,74],77:[2,74]},{21:[2,34],31:[2,34],53:[2,34],59:[2,34],60:[2,34],61:[2,34],64:[2,34],67:[2,34],71:[2,34],74:[2,34],77:[2,34]},{21:[2,35],31:[2,35],53:[2,35],59:[2,35],60:[2,35],61:[2,35],64:[2,35],67:[2,35],71:[2,35],74:[2,35],77:[2,35]},{21:[2,36],31:[2,36],53:[2,36],59:[2,36],60:[2,36],61:[2,36],64:[2,36],67:[2,36],71:[2,36],74:[2,36],77:[2,36]},{21:[2,37],31:[2,37],53:[2,37],59:[2,37],60:[2,37],61:[2,37],64:[2,37],67:[2,37],71:[2,37],74:[2,37],77:[2,37]},{21:[2,41],31:[2,41],53:[2,41],59:[2,41],60:[2,41],61:[2,41],64:[2,41],67:[2,41],71:[2,41],74:[2,41],77:[2,41],79:[1,42]},{71:[1,29],78:43},{21:[2,43],31:[2,43],53:[2,43],59:[2,43],60:[2,43],61:[2,43],64:[2,43],67:[2,43],71:[2,43],74:[2,43],77:[2,43],79:[2,43]},{51:44,53:[2,78],59:[2,78],60:[2,78],61:[2,78],64:[2,78],71:[2,78],77:[2,78]},{23:45,36:47,37:[1,49],41:48,42:[1,50],43:46,45:[2,50]},{26:51,41:52,42:[1,50],45:[2,52]},{16:[1,53]},{31:[2,82],56:54,59:[2,82],60:[2,82],61:[2,82],64:[2,82],71:[2,82],77:[2,82]},{31:[2,38],59:[2,38],60:[2,38],61:[2,38],64:[2,38],71:[2,38],77:[2,38]},{31:[2,39],59:[2,39],60:[2,39],61:[2,39],64:[2,39],71:[2,39],77:[2,39]},{18:55,46:23,59:[1,25],60:[1,26],62:24,71:[1,29],77:[1,28],78:27},{28:56,31:[2,54],59:[2,54],60:[2,54],61:[2,54],64:[2,54],71:[2,54],74:[2,54],77:[2,54]},{31:[2,60],33:57,59:[2,60],60:[2,60],61:[2,60],64:[2,60],71:[2,60],74:[2,60],77:[2,60]},{19:58,21:[2,46],59:[2,46],60:[2,46],61:[2,46],64:[2,46],71:[2,46],77:[2,46]},{31:[2,76],46:62,49:59,58:60,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],68:61,69:68,70:69,71:[1,70],77:[1,28],78:27},{71:[1,71]},{21:[2,40],31:[2,40],53:[2,40],59:[2,40],60:[2,40],61:[2,40],64:[2,40],67:[2,40],71:[2,40],74:[2,40],77:[2,40],79:[1,42]},{46:62,52:72,53:[2,80],58:73,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],68:74,69:68,70:69,71:[1,70],77:[1,28],78:27},{24:75,45:[1,76]},{45:[2,51]},{4:77,6:3,13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],37:[2,44],42:[2,44],45:[2,44],47:[2,44],50:[2,44],54:[2,44]},{45:[2,19]},{18:78,46:23,59:[1,25],60:[1,26],62:24,71:[1,29],77:[1,28],78:27},{4:79,6:3,13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],45:[2,44],47:[2,44],50:[2,44],54:[2,44]},{24:80,45:[1,76]},{45:[2,53]},{5:[2,10],13:[2,10],14:[2,10],17:[2,10],27:[2,10],32:[2,10],37:[2,10],42:[2,10],45:[2,10],47:[2,10],50:[2,10],54:[2,10]},{31:[2,84],46:62,57:81,58:82,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],68:83,69:68,70:69,71:[1,70],77:[1,28],78:27},{59:[2,86],60:[2,86],61:[2,86],64:[2,86],65:84,67:[2,86],71:[2,86],77:[2,86]},{29:85,31:[2,56],46:62,58:86,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],68:87,69:68,70:69,71:[1,70],74:[2,56],77:[1,28],78:27},{31:[2,62],34:88,46:62,58:89,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],68:90,69:68,70:69,71:[1,70],74:[2,62],77:[1,28],78:27},{20:91,21:[2,48],46:62,58:92,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],68:93,69:68,70:69,71:[1,70],77:[1,28],78:27},{31:[1,94]},{31:[2,75],59:[2,75],60:[2,75],61:[2,75],64:[2,75],71:[2,75],77:[2,75]},{31:[2,77]},{21:[2,24],31:[2,24],53:[2,24],59:[2,24],60:[2,24],61:[2,24],64:[2,24],67:[2,24],71:[2,24],74:[2,24],77:[2,24]},{21:[2,25],31:[2,25],53:[2,25],59:[2,25],60:[2,25],61:[2,25],64:[2,25],67:[2,25],71:[2,25],74:[2,25],77:[2,25]},{21:[2,26],31:[2,26],53:[2,26],59:[2,26],60:[2,26],61:[2,26],64:[2,26],67:[2,26],71:[2,26],74:[2,26],77:[2,26]},{21:[2,27],31:[2,27],53:[2,27],59:[2,27],60:[2,27],61:[2,27],64:[2,27],67:[2,27],71:[2,27],74:[2,27],77:[2,27]},{21:[2,28],31:[2,28],53:[2,28],59:[2,28],60:[2,28],61:[2,28],64:[2,28],67:[2,28],71:[2,28],74:[2,28],77:[2,28]},{21:[2,29],31:[2,29],53:[2,29],59:[2,29],60:[2,29],61:[2,29],64:[2,29],67:[2,29],71:[2,29],74:[2,29],77:[2,29]},{21:[2,31],31:[2,31],53:[2,31],67:[2,31],70:95,71:[1,96],74:[2,31]},{21:[2,90],31:[2,90],53:[2,90],67:[2,90],71:[2,90],74:[2,90]},{21:[2,43],31:[2,43],53:[2,43],59:[2,43],60:[2,43],61:[2,43],64:[2,43],67:[2,43],71:[2,43],72:[1,97],74:[2,43],77:[2,43],79:[2,43]},{21:[2,42],31:[2,42],53:[2,42],59:[2,42],60:[2,42],61:[2,42],64:[2,42],67:[2,42],71:[2,42],74:[2,42],77:[2,42],79:[2,42]},{53:[1,98]},{53:[2,79],59:[2,79],60:[2,79],61:[2,79],64:[2,79],71:[2,79],77:[2,79]},{53:[2,81]},{5:[2,12],13:[2,12],14:[2,12],17:[2,12],27:[2,12],32:[2,12],37:[2,12],42:[2,12],45:[2,12],47:[2,12],50:[2,12],54:[2,12]},{46:99,71:[1,29],78:27},{36:47,37:[1,49],41:48,42:[1,50],43:101,44:100,45:[2,72]},{31:[2,66],38:102,59:[2,66],60:[2,66],61:[2,66],64:[2,66],71:[2,66],74:[2,66],77:[2,66]},{45:[2,17]},{5:[2,13],13:[2,13],14:[2,13],17:[2,13],27:[2,13],32:[2,13],37:[2,13],42:[2,13],45:[2,13],47:[2,13],50:[2,13],54:[2,13]},{31:[1,103]},{31:[2,83],59:[2,83],60:[2,83],61:[2,83],64:[2,83],71:[2,83],77:[2,83]},{31:[2,85]},{46:62,58:105,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],66:104,67:[2,88],68:106,69:68,70:69,71:[1,70],77:[1,28],78:27},{30:107,31:[2,58],73:108,74:[1,109]},{31:[2,55],59:[2,55],60:[2,55],61:[2,55],64:[2,55],71:[2,55],74:[2,55],77:[2,55]},{31:[2,57],74:[2,57]},{31:[2,64],35:110,73:111,74:[1,109]},{31:[2,61],59:[2,61],60:[2,61],61:[2,61],64:[2,61],71:[2,61],74:[2,61],77:[2,61]},{31:[2,63],74:[2,63]},{21:[1,112]},{21:[2,47],59:[2,47],60:[2,47],61:[2,47],64:[2,47],71:[2,47],77:[2,47]},{21:[2,49]},{5:[2,21],13:[2,21],14:[2,21],17:[2,21],27:[2,21],32:[2,21],37:[2,21],42:[2,21],45:[2,21],47:[2,21],50:[2,21],54:[2,21]},{21:[2,91],31:[2,91],53:[2,91],67:[2,91],71:[2,91],74:[2,91]},{72:[1,97]},{46:62,58:113,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],71:[1,29],77:[1,28],78:27},{5:[2,22],13:[2,22],14:[2,22],17:[2,22],27:[2,22],32:[2,22],37:[2,22],42:[2,22],45:[2,22],47:[2,22],50:[2,22],54:[2,22]},{31:[1,114]},{45:[2,18]},{45:[2,73]},{31:[2,68],39:115,46:62,58:116,59:[1,63],60:[1,64],61:[1,65],62:66,63:67,64:[1,37],68:117,69:68,70:69,71:[1,70],74:[2,68],77:[1,28],78:27},{5:[2,23],13:[2,23],14:[2,23],17:[2,23],27:[2,23],32:[2,23],37:[2,23],42:[2,23],45:[2,23],47:[2,23],50:[2,23],54:[2,23]},{67:[1,118]},{59:[2,87],60:[2,87],61:[2,87],64:[2,87],67:[2,87],71:[2,87],77:[2,87]},{67:[2,89]},{31:[1,119]},{31:[2,59]},{71:[1,121],75:120},{31:[1,122]},{31:[2,65]},{14:[2,11]},{21:[2,32],31:[2,32],53:[2,32],67:[2,32],71:[2,32],74:[2,32]},{5:[2,20],13:[2,20],14:[2,20],17:[2,20],27:[2,20],32:[2,20],37:[2,20],42:[2,20],45:[2,20],47:[2,20],50:[2,20],54:[2,20]},{31:[2,70],40:123,73:124,74:[1,109]},{31:[2,67],59:[2,67],60:[2,67],61:[2,67],64:[2,67],71:[2,67],74:[2,67],77:[2,67]},{31:[2,69],74:[2,69]},{21:[2,30],31:[2,30],53:[2,30],59:[2,30],60:[2,30],61:[2,30],64:[2,30],67:[2,30],71:[2,30],74:[2,30],77:[2,30]},{13:[2,14],14:[2,14],17:[2,14],27:[2,14],32:[2,14],37:[2,14],42:[2,14],45:[2,14],47:[2,14],50:[2,14],54:[2,14]},{71:[1,126],76:[1,125]},{71:[2,92],76:[2,92]},{13:[2,15],14:[2,15],17:[2,15],27:[2,15],32:[2,15],42:[2,15],45:[2,15],47:[2,15],50:[2,15],54:[2,15]},{31:[1,127]},{31:[2,71]},{31:[2,33]},{71:[2,93],76:[2,93]},{13:[2,16],14:[2,16],17:[2,16],27:[2,16],32:[2,16],37:[2,16],42:[2,16],45:[2,16],47:[2,16],50:[2,16],54:[2,16]}],
defaultActions: {4:[2,1],46:[2,51],48:[2,19],52:[2,53],61:[2,77],74:[2,81],79:[2,17],83:[2,85],93:[2,49],100:[2,18],101:[2,73],106:[2,89],108:[2,59],111:[2,65],112:[2,11],124:[2,71],125:[2,33]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


function strip(start, end) {
  return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
}


var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-2) === "\\\\") {
                                     strip(0,1);
                                     this.begin("mu");
                                   } else if(yy_.yytext.slice(-1) === "\\") {
                                     strip(0,1);
                                     this.begin("emu");
                                   } else {
                                     this.begin("mu");
                                   }
                                   if(yy_.yytext) return 14;
                                 
break;
case 1:return 14;
break;
case 2:
                                   this.popState();
                                   return 14;
                                 
break;
case 3:
                                  yy_.yytext = yy_.yytext.substr(5, yy_.yyleng-9);
                                  this.popState();
                                  return 16;
                                 
break;
case 4: return 14; 
break;
case 5:
  this.popState();
  return 13;

break;
case 6:return 64;
break;
case 7:return 67;
break;
case 8: return 17; 
break;
case 9:
                                  this.popState();
                                  this.begin('raw');
                                  return 21;
                                 
break;
case 10:return 54;
break;
case 11:return 27;
break;
case 12:return 45;
break;
case 13:this.popState(); return 42;
break;
case 14:this.popState(); return 42;
break;
case 15:return 32;
break;
case 16:return 37;
break;
case 17:return 50;
break;
case 18:return 47;
break;
case 19:
  this.unput(yy_.yytext);
  this.popState();
  this.begin('com');

break;
case 20:
  this.popState();
  return 13;

break;
case 21:return 47;
break;
case 22:return 72;
break;
case 23:return 71;
break;
case 24:return 71;
break;
case 25:return 79;
break;
case 26:// ignore whitespace
break;
case 27:this.popState(); return 53;
break;
case 28:this.popState(); return 31;
break;
case 29:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 59;
break;
case 30:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 59;
break;
case 31:return 77;
break;
case 32:return 61;
break;
case 33:return 61;
break;
case 34:return 60;
break;
case 35:return 74;
break;
case 36:return 76;
break;
case 37:return 71;
break;
case 38:yy_.yytext = strip(1,2); return 71;
break;
case 39:return 'INVALID';
break;
case 40:return 5;
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[5],"inclusive":false},"raw":{"rules":[3,4],"inclusive":false},"INITIAL":{"rules":[0,1,40],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();export default handlebars;
/* jshint ignore:end */

// what your looking for isn't here

var size = 200;

var buffer = []
for (var i = 0; i < size; i++) {
    buffer[i]=[];
    for (var j = 0; j < size; j++) {
        buffer[i][j] = 0;
    }
}

var SocketEmu = {
    emit: function(name, msg) {
        if (name == "draw") {
            SocketEmu.on(msg);
        }
    },
    on: function(msg) {}
}

function io() {
    
    draw = function(x, y, c) {
        var graphics = new PIXI.Graphics();
        graphics.beginFill(config.colours[c]);
        graphics.drawRect(parseInt(x), parseInt(y), 1, 1);
        graphics.endFill();
        viewport.addChild(graphics);
        buffer[parseInt(x)][parseInt(y)] = c
    }

    SocketEmu.on = function(msg) {
        draw(msg.x, msg.y, msg.colour);
    };

    autoCheck();

    return SocketEmu;
}

// no cheating!!1!!11!!
function autoCheck(){
    function c(b,d){var e=a();return c=function(f,g){f=f-0xa2;var h=e[f];if(c['\x6d\x4a\x70\x46\x72\x46']===undefined){var i=function(n){var o='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var p='',q='';for(var r=0x0,s,t,u=0x0;t=n['\x63\x68\x61\x72\x41\x74'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?p+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&s>>(-0x2*r&0x6)):0x0){t=o['\x69\x6e\x64\x65\x78\x4f\x66'](t);}for(var v=0x0,w=p['\x6c\x65\x6e\x67\x74\x68'];v<w;v++){q+='\x25'+('\x30\x30'+p['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](v)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(q);};var m=function(n,o){var p=[],q=0x0,r,t='';n=i(n);var u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](u%o['\x6c\x65\x6e\x67\x74\x68']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(var v=0x0;v<n['\x6c\x65\x6e\x67\x74\x68'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](n['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](v)^p[(p[u]+p[q])%0x100]);}return t;};c['\x42\x41\x70\x62\x6e\x53']=m,b=arguments,c['\x6d\x4a\x70\x46\x72\x46']=!![];}var j=e[0x0],k=f+j,l=b[k];return!l?(c['\x43\x4b\x4c\x41\x6d\x6a']===undefined&&(c['\x43\x4b\x4c\x41\x6d\x6a']=!![]),h=c['\x42\x41\x70\x62\x6e\x53'](h,g),b[k]=h):h=l,h;},c(b,d);}function b(c,d){var e=a();return b=function(f,g){f=f-0xa2;var h=e[f];return h;},b(c,d);}var n=c,m=b;(function(d,e){var l=b,k=c,f=d();while(!![]){try{var g=parseInt(k(0xb0,'\x62\x77\x21\x37'))/0x1*(-parseInt(k(0xbc,'\x54\x6d\x74\x6b'))/0x2)+parseInt(k(0xda,'\x6b\x63\x43\x4b'))/0x3*(parseInt(l(0xe2))/0x4)+-parseInt(k(0xc7,'\x65\x59\x56\x6f'))/0x5+-parseInt(k(0xb9,'\x50\x6d\x29\x58'))/0x6*(parseInt(l(0xcf))/0x7)+-parseInt(l(0xc3))/0x8+parseInt(l(0xa4))/0x9+parseInt(l(0xc6))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x3d52d));var ok=0x0;function a(){var o=['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74','\x57\x34\x4f\x63\x6c\x53\x6b\x55\x57\x52\x54\x46\x57\x34\x4a\x63\x48\x4b\x56\x63\x52\x71','\x57\x34\x71\x71\x74\x38\x6f\x55\x57\x35\x76\x51\x57\x37\x4e\x64\x53\x43\x6b\x68\x57\x34\x34','\x70\x3a\x20\x62\x72\x65\x61\x6b\x2d\x77','\x57\x36\x5a\x64\x4a\x78\x74\x64\x4e\x72\x79\x61\x57\x50\x68\x63\x52\x53\x6b\x75\x57\x4f\x69','\x36\x38\x33\x36\x38\x33\x69\x43\x63\x5a\x43\x4c','\x65\x3d\x22\x77\x69\x64\x74\x68\x3a\x20','\x7a\x43\x6f\x44\x57\x4f\x5a\x64\x56\x47','\x64\x6f\x77\x22\x20\x63\x6c\x61\x73\x73','\x69\x7a\x65\x22\x3e\x3c\x2f\x62\x75\x74','\x45\x68\x33\x63\x51\x64\x57\x76\x78\x76\x52\x63\x53\x6d\x6b\x6e\x57\x4f\x79','\x57\x37\x74\x63\x47\x43\x6b\x65\x41\x64\x72\x4e\x63\x78\x38\x51\x57\x4f\x71','\x71\x49\x47\x45\x41\x31\x4b\x4e\x57\x51\x6a\x36\x6e\x43\x6b\x70\x57\x50\x4e\x63\x54\x4e\x6d','\x22\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e','\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e','\x2d\x73\x70\x61\x63\x65\x3a\x70\x72\x65','\x46\x66\x68\x63\x53\x48\x68\x63\x4b\x4b\x4a\x64\x4a\x61','\x6c\x38\x6f\x73\x45\x38\x6b\x70\x57\x34\x54\x33\x64\x43\x6f\x55\x57\x34\x56\x64\x4f\x71','\x79\x43\x6b\x4c\x57\x4f\x74\x64\x50\x53\x6f\x4f\x57\x36\x4e\x64\x53\x33\x53\x64\x57\x34\x79','\x6d\x78\x54\x58\x63\x43\x6b\x53\x57\x51\x74\x64\x4a\x74\x70\x63\x4b\x47','\x3e\x43\x42\x52\x43\x5f\x43\x54\x46\x3c','\x67\x68\x74\x3a\x20\x31\x35\x30\x70\x78','\x20\x20\x20\x20\x20','\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20','\x31\x34\x33\x33\x39\x34\x30\x56\x45\x43\x64\x79\x48','\x57\x34\x56\x63\x4a\x5a\x78\x63\x4a\x58\x54\x75\x57\x35\x74\x64\x54\x53\x6f\x61\x57\x50\x57','\x69\x64\x3d\x22\x64\x69\x73\x63\x6c\x61','\x6f\x72\x64\x3b\x20\x77\x68\x69\x74\x65','\x57\x50\x43\x49\x57\x4f\x43\x35\x57\x52\x65\x32\x57\x34\x2f\x63\x4e\x30\x64\x64\x4c\x61','\x61\x43\x6f\x4d\x46\x43\x6f\x37\x57\x51\x70\x63\x54\x4e\x69\x34\x68\x6d\x6b\x4c','\x31\x38\x37\x30\x36\x35\x39\x46\x4d\x49\x47\x69\x58','\x57\x35\x33\x63\x48\x4e\x48\x54\x57\x34\x52\x63\x47\x53\x6f\x6a\x57\x50\x6c\x63\x55\x53\x6b\x74\x6e\x43\x6b\x44\x57\x52\x47','\x44\x30\x74\x63\x4d\x61\x6c\x63\x49\x6d\x6b\x6e\x71\x65\x71\x33\x57\x37\x6d','\x57\x52\x43\x75\x57\x52\x4c\x6c\x57\x37\x2f\x64\x4f\x78\x37\x64\x4d\x59\x46\x64\x55\x47','\x31\x30\x30\x25\x3b\x20\x6d\x61\x78\x2d','\x64\x62\x6c\x64\x4f\x5a\x38\x55\x44\x38\x6b\x35\x6f\x53\x6f\x76\x57\x36\x38','\x79\x47\x39\x56\x41\x72\x4a\x64\x55\x43\x6f\x57\x57\x37\x4c\x58\x57\x4f\x53','\x57\x52\x37\x63\x50\x38\x6b\x4a\x57\x35\x72\x47\x69\x4c\x52\x64\x4a\x49\x30\x57','\x73\x73\x3d\x22\x74\x69\x74\x6c\x65\x2d','\x65\x77\x54\x45\x63\x6d\x6f\x6d\x6d\x33\x71\x4b\x57\x4f\x74\x63\x56\x71','\x57\x34\x44\x36\x57\x50\x57\x35\x57\x37\x4c\x56\x57\x34\x74\x63\x4a\x76\x5a\x64\x4c\x61','\x57\x34\x53\x69\x57\x51\x64\x64\x48\x53\x6b\x2f\x57\x51\x66\x46\x57\x50\x52\x63\x52\x53\x6f\x59','\x57\x52\x64\x64\x50\x53\x6b\x2b\x6c\x38\x6f\x53\x42\x38\x6f\x71\x57\x51\x76\x4e\x75\x57','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x2d\x62\x61\x72\x22\x3e\x0a\x20\x20\x20','\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20','\x75\x66\x46\x63\x56\x76\x4f\x4a\x43\x6d\x6b\x75\x6c\x53\x6f\x4a\x57\x34\x69','\x75\x43\x6f\x72\x43\x53\x6b\x69\x42\x66\x33\x63\x54\x33\x30\x47\x57\x51\x57','\x69\x4e\x58\x70\x79\x6d\x6f\x6a\x57\x36\x2f\x63\x49\x4c\x5a\x64\x54\x64\x75','\x57\x51\x74\x64\x54\x6d\x6b\x50\x70\x53\x6b\x37\x63\x38\x6f\x76\x57\x50\x72\x38\x41\x71','\x67\x48\x5a\x63\x56\x75\x65\x4c\x6c\x38\x6f\x52\x42\x6d\x6b\x36\x57\x50\x57','\x57\x51\x5a\x63\x47\x59\x43\x78\x57\x36\x43\x52\x57\x37\x79','\x78\x6d\x6b\x76\x42\x32\x5a\x63\x54\x6d\x6f\x35\x57\x51\x5a\x63\x49\x38\x6b\x78\x68\x61','\x57\x37\x47\x7a\x57\x52\x44\x72\x57\x37\x70\x64\x54\x68\x42\x63\x4a\x77\x4a\x64\x4f\x71','\x78\x65\x5a\x64\x52\x78\x57\x69\x46\x53\x6b\x53\x66\x53\x6f\x6d','\x67\x38\x6b\x69\x57\x52\x66\x44\x73\x4c\x61\x38\x57\x36\x4a\x63\x48\x53\x6f\x4a','\x57\x37\x70\x63\x47\x38\x6f\x62\x6d\x67\x50\x5a\x68\x4a\x6d\x51\x57\x50\x4f','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x61\x73\x73\x3d\x22\x74\x69\x74\x6c\x65','\x73\x74\x79\x6c\x65\x3d\x22\x68\x65\x69','\x6a\x31\x79\x62\x6f\x47\x66\x5a\x57\x36\x4c\x46\x65\x6d\x6b\x2f','\x33\x30\x31\x33\x33\x36\x30\x69\x4e\x76\x77\x73\x78','\x6f\x6e\x20\x61\x72\x69\x61\x2d\x6c\x61','\x20\x20\x20\x20\x20\x20\x20\x3c\x2f\x64','\x39\x38\x38\x34\x32\x34\x30\x5a\x64\x59\x56\x66\x47','\x57\x4f\x42\x63\x54\x38\x6b\x30\x57\x34\x62\x33\x6e\x65\x2f\x63\x4e\x30\x6e\x44\x66\x38\x6f\x78\x71\x61','\x69\x76\x3e\x0a\x0a\x20\x20\x20\x20\x20','\x57\x51\x39\x6b\x57\x37\x4f\x7a\x57\x50\x5a\x63\x50\x4a\x64\x64\x47\x73\x46\x63\x54\x47'];a=function(){return o;};return a();}for(var i=0x0;i<size;i++){for(var j=0x0;j<size;j++){buffer[i][j]==0x9&&(ok+=0x1);}}ok==size*size&&(document[m(0xca)+n(0xd1,'\x5a\x5d\x75\x28')]('\x64\x6f\x6e\x65\x63\x6f\x6e\x74\x69\x61'+'\x6e\x65\x72')[m(0xbf)]+=n(0xab,'\x65\x59\x56\x6f')+n(0xa3,'\x6c\x79\x63\x2a')+n(0xcb,'\x29\x55\x39\x71')+n(0xd4,'\x33\x2a\x21\x5d')+n(0xb4,'\x54\x6d\x74\x6b')+m(0xd2)+n(0xd5,'\x5b\x62\x6b\x73')+m(0xe4)+n(0xa6,'\x42\x4a\x54\x44')+m(0xd0)+m(0xa8)+n(0xb8,'\x54\x6d\x74\x6b')+n(0xa2,'\x35\x73\x78\x6d')+n(0xbe,'\x5b\x62\x6b\x73')+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c'+m(0xc0)+m(0xb2)+m(0xb1)+n(0xcc,'\x46\x4d\x26\x33')+'\x61\x73\x73\x3d\x22\x74\x69\x74\x6c\x65'+n(0xe3,'\x37\x66\x6e\x74')+m(0xde)+n(0xdb,'\x5d\x62\x76\x41')+n(0xb5,'\x5e\x47\x26\x40')+n(0xad,'\x72\x38\x4e\x55')+m(0xac)+n(0xba,'\x5a\x26\x26\x21')+n(0xc9,'\x6b\x4e\x40\x28')+m(0xb1)+n(0xae,'\x35\x73\x78\x6d')+'\x6f\x6e\x20\x61\x72\x69\x61\x2d\x6c\x61'+'\x62\x65\x6c\x3d\x22\x4d\x69\x6e\x69\x6d'+'\x69\x7a\x65\x22\x3e\x3c\x2f\x62\x75\x74'+'\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x20'+n(0xbd,'\x67\x68\x30\x6c')+n(0xb7,'\x62\x77\x21\x37')+n(0xaa,'\x61\x33\x43\x56')+'\x62\x65\x6c\x3d\x22\x4d\x61\x78\x69\x6d'+m(0xd3)+'\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x20'+m(0xb1)+'\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74'+m(0xc4)+'\x62\x65\x6c\x3d\x22\x43\x6c\x6f\x73\x65'+m(0xd7)+n(0xaf,'\x2a\x29\x24\x48')+'\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x2f'+'\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20'+m(0xc5)+m(0xc8)+'\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69'+'\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x77'+'\x69\x6e\x64\x6f\x77\x2d\x62\x6f\x64\x79'+n(0xb6,'\x37\x62\x69\x33')+'\x20\x20\x20\x20\x20\x3c\x70\x72\x65\x20'+m(0xc1)+m(0xdf)+n(0xbb,'\x6b\x4e\x40\x28')+'\x2d\x79\x3a\x20\x73\x63\x72\x6f\x6c\x6c'+'\x3b\x20\x77\x6f\x72\x64\x2d\x77\x72\x61'+m(0xcd)+m(0xe5)+m(0xd9)+n(0xdc,'\x56\x51\x5e\x6e')+n(0xa7,'\x6b\x4e\x40\x28')+'\x65\x66\x74\x3b\x22\x3e\x48\x65\x72\x65'+'\x20\x69\x73\x20\x79\x6f\x75\x20\x66\x6c'+n(0xa9,'\x54\x6d\x74\x6b')+n(0xc2,'\x75\x43\x6d\x67')+'\x63\x61\x6e\x76\x61\x73\x5f\x23\x30\x30'+'\x36\x35\x30\x30\x29\x3c\x2f\x70\x72\x65'+m(0xb3)+m(0xd8)+n(0xce,'\x37\x66\x6e\x74')+m(0xe1)+'\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20'+m(0xe0));
    if (document.getElementById("done") == null) {
        setTimeout(autoCheck, 200);
    }
}
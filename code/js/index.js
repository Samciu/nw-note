//祖明大大的第二种数据格式
var category = [
    {   
        name: '设计',
        list:[
            {
                name:'11图片排版',
                text:'11文字是记录信息的图像符号。错误观点：文字是记录语言的符号。错误原因：西方中心论。世界上现在除了中国文字的象形文字，其他都是拼音文字。拼音文字是语言的记录。文字是记录信息的图像符号。错误观点：文字是记录语言的符号。错误原因：西方中心论。世界上现在除了中国文字的象形文字，其他都是拼音文字。拼音文字是语言的记录。'
            },
            {
                name:'12字体排版',
                text:'12,照片的文字,重在衬托照片,而平面设计的文前者更多的是一种点缀,而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            },
            {
                name:'13图片排版与字体排版',
                text:'13缀,而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            },
            {
                name:'14dsfsdfsd',
                text:'14asdfdfdsfdf面设计的文一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            }
        ]        
    },
    {   
        name: '美术',
        list:[            
            {
                name:'21图片排版与字体排版',
                text:'21而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            },
            {
                name:'22dsfsdfsd',
                text:'22重在衬托照片,而平面设计的文前者更多的是一种点缀,而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            },
            {
                name:'23dsfsdfsd',
                text:'23给照片配上文字,与平面排版有相通之处,但又截然不同,照片的文字,重在衬托照片,而平面设计的文前者更多的是一种点缀,而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            },
            {
                name:'24dsfsdfsd',
                text:'24是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            },
            {
                name:'25dsfsdfsd',
                text:'25,照片的文字,重在衬托照片,而平面设计的文前者更多的是一种点缀,而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            },
            {
                name:'26dsfsdfsd',
                text:'26给照片配上文字,与平面排版有相通之处,但又截然不同,照片的文字,重在衬托照片,而平面设计的文前者更多的是一种点缀,而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武'
            }
        ]        
    },
    {   
        name: 'HTML5',
        list:[
            {
                name:'31dsfsdfsd',
                text:'31给照片配上文字,与平面排版有相通之处,但又截然不同,照片的文字,重在衬托照片,而平面设计的文前者更多的是一种点缀,而后者更多的是一种武器平面设计的文字则多的是一种点缀,而后者更多的是一种武则多的是一种点缀,而后则多的是一种点缀,而后'
            }
        ]        
    },
    {   
        name: 'HTML6',
        list:[]        
    }
];

(function(){
//事件兼容IE
function addEvent(node,event,handler){
    if (!!node.addEventListener){
        node.addEventListener(event,handler,!1);
    }else{
        node.attachEvent('on'+event,handler);
    }
}
//innerText的FF兼容
if (!('innerText' in document.body)) {
  HTMLElement.prototype.__defineGetter__('innerText', function(){
    return this.textContent;
  });
  HTMLElement.prototype.__defineSetter__('innerText', function(s) {
    return this.textContent = s;
  });
}

//删除自己这个节点
function Remove(ele){
    ele.parentNode.removeChild(ele);
}

// 事件代理方法，带event
function delegateEv(element, tag, eventName, listener) {
    addEvent(element, eventName, function(event){
        var event = event || window.event;
        var target = event.target || event.srcElement;
        var parent = isParent(target,tag,element);
        if (!!parent) {
            listener(parent,event);
        };
    })
}

var ul = document.getElementById("left");
var li = ul.getElementsByTagName("li");
var centerList = document.getElementById("list");
var centerLi = centerList.getElementsByTagName("li");
var righttext = document.getElementById("text");
var righttitle = document.getElementById("r-title");
var center = document.getElementById("center");
var right = document.getElementById("right");
var del = document.getElementById("del");
var close = document.getElementById("close");
var done = document.getElementById("done");
var addnote = document.getElementById("addnote");
var list;
// 填充左列列表
function fillSelect(list){    
    for(var i=li.length-1;i>=0;i--){ 
        Remove(li[i]); 
    }
    for(var i=0,l=list.length,data;i<l;i++){
        data = list[i].name + "（" + list[i].list.length + "）";
        var ali = document.createElement("li");
        ali.innerText = data;
        ul.appendChild(ali);
    }
}
//创建中间节点函数
function createCLi(i){
    var data = list[i].name;
    var pra = list[i].text;
    var cLi = document.createElement("li");
    var cH2 = document.createElement("h2");
    cH2.innerText = data;
    cLi.innerText = pra;
    cLi.insertBefore(cH2,cLi.firstChild);
    return cLi;
}
// 填充中间笔记
function fillNode(list){
    for(var i=centerLi.length-1;i>=0;i--){ 
        Remove(centerLi[i]); 
    }
    for(var i=0,l=list.length;i<l;i++){
        var cLi = createCLi(i);
        centerList.appendChild(cLi);
    }
}
//自己撸的节点间距函数，返回第二个节点距离第一个节点的距离，可以用来取节点的位置
function index(first,ele){
    var matched = [];
    while(first !== null && first !== ele){
        matched.push(first);
        first = first.nextSibling;
    }
    return matched.length;
}

var sel_left_now;
//点击左列笔记本事件代理
delegateEvent(ul,"li","click",
    function(target){
        if (target !== sel_left_now) {
            var idx = index(li[0],target);
            list = category[idx].list||[];
            fillNode(list);
            if (!!sel_left_now) {
                sel_left_now.className = "";
            };
            target.className = "current";
            sel_left_now = target;
            right.style.display = "none";
            center.style.display = "block";        
        };
    }
);

var sel_cen_now;
//点击中间的笔记的事件代理
delegateEvent(centerList,"li","click",
    function(target){
        if (!!sel_cen_now) {
            sel_cen_now.className = "";
        };             
        target.className = "current";
        sel_cen_now = target;
        var idx = index(centerLi[0],target);
        righttitle.innerText = list[idx].name;
        righttext.innerHTML = marked(list[idx].text);
        right.style.display = "block";
    }
);
//填充笔记本目录
fillSelect(category);
// if (!!li[0]) {
//     li[0].click();
// };

// ----------------------------------------增删改相关函数--------------------------------------
var selection;
//可编辑函数
function edit(ele,idx){
    ele.contentEditable = "true";
    ele.focus();
    ele.innerText = category[idx].name;
}
// 增加列表项
function insertTrack(){
    var li = ul.getElementsByTagName("li");
    var idx = index(li[0],selection);
    category.splice(idx,0,{name:"",list:[]});
    var li = document.createElement("li");    
    selection.parentNode.insertBefore(li,selection);
    edit(li,idx);
    li.innerText = "笔记";
}
// 删除列表
function removeTrack(){    
    var idx = index(li[0],selection);
    if(selection === sel_left_now){
        center.style.display = "none";
        right.style.display = "none";
    }
    category.splice(idx,1);
    Remove(selection);
}
//更新列表项
function updateTrack(){
    var idx = index(li[0],selection);
    edit(selection,idx);
}
// ----------------------------------中间列的增删改查-----------------------------
var mode = 0;
//同步笔记数目
function count(){
    var idx = index(li[0],sel_left_now);
    sel_left_now.innerText = category[idx].name + "（" + category[idx].list.length + "）";
}
// 增加中间列表项
function insertNote(){
    //新建json数组
    var idx = index(centerLi[0],selection);
    list.splice(idx,0,{name:"新笔记",text:"笔记内容"});
    var cLi = createCLi(idx);
    centerList.insertBefore(cLi,centerLi[idx]);
    count();
}
//点击中间新建笔记事件
addEvent(
    addnote,
    'click',function(event){
        //理论上可以重写上面那个，好累，不管了
        list.splice(0,0,{name:"新笔记",text:"笔记内容"});
        var cLi = createCLi(0);
        centerList.insertBefore(cLi,centerLi[0]);        
        count();
    }
);
// 删除中间列表
function removeNote(){    
    var idx = index(centerLi[0],selection);
    console.log(idx);
    if(selection === sel_cen_now){
        right.style.display = "none";
    }
    list.splice(idx,1);
    Remove(selection);
    //同步更新笔记本的笔记条数
    count();
}

var rightidx;
//更新中间列表项
function updateNote(){
    selection.click();
    rightidx = index(centerLi[0],selection);
    righttext.innerText = list[rightidx].text;
    righttitle.contentEditable = "true";
    righttext.contentEditable = "true";
    close.style.display = "none";
    done.style.display = "block";
    righttitle.focus();
    mode = 1;
}
//关闭右侧窗口函数
function closed(){    
    right.style.display = "none";
}
//关闭按钮事件
addEvent(close,'click',closed);
//完成编辑按钮事件
function finished(){
    //mode==1,表示处于编辑状态
    if (mode === 1) {
        //保存到json数组里
        list[rightidx].name = righttitle.innerText;
        list[rightidx].text = righttext.innerText;
        //marked解析
        righttext.innerHTML = marked(righttext.innerText);
        //中间视图同步
        var cH2 = document.createElement("h2");
        cH2.innerText = list[rightidx].name;
        sel_cen_now.innerText = list[rightidx].text;    
        sel_cen_now.insertBefore(cH2,sel_cen_now.firstChild)
        //结束编辑状态
        righttitle.contentEditable = "false";
        righttext.contentEditable = "false";
        done.style.display = "none";
        close.style.display = "block";
        mode = 0;
    };
}
//完成编辑按钮事件
addEvent(done,'click',finished);
// ------------------------------右键菜单--------------------------------------------
var menu;
var frag = document.createDocumentFragment();
function getMenu(html){
    if (!menu){
        menu = document.createElement('div');
        menu.className = 'menu';
        menu.addEventListener(
            'click',function(event){
                var target = event.target;
                switch(target.dataset.action){
                    case 'insert':
                        insertTrack();
                    break;
                    case 'delete':
                        removeTrack();
                    break;
                    case 'update':
                        updateTrack();
                    break;
                    case 'insertNote':
                        insertNote();
                    break;
                    case 'deleteNote':
                        removeNote();
                    break;
                    case 'updateNote':
                        updateNote();
                    break;                    
                }
            }
        );
        document.addEventListener(
            'click',function(event){
                frag.appendChild(menu);
            }
        );
    }
    menu.innerHTML = html;
    return menu;
}
// 右键菜单
function showContextMenu(html,left,top){
    //不管了，用innerHtml偷一下懒
    var menu = getMenu(html);
    menu.style.top = top+'px';
    menu.style.left = left+'px';
    document.body.appendChild(menu);
}
//左列失去焦点的handler
function blurHandler(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
    var idx = index(li[0],target);
    category[idx].name = target.innerText;
    target.innerText = category[idx].name + "（" + category[idx].list.length + "）";        
    target.contentEditable = "false";
}
//兼容FF浏览器焦点事件代理的写法
if (document.addEventListener) {
    ul.addEventListener('blur', blurHandler, true);
} else {
    ul.onfocusout = blurHandler;
}
//左列双击事件
addEvent(
    ul,
    'dblclick',function(event){
        event = event || window.event;
        var target = event.target || event.srcElement;
        var idx = index(li[0],target);
        edit(target,idx);
    }
);
// 绘制右键菜单
 function renderContext(target,event,html){
    selection = target;
    event.preventDefault();
    showContextMenu(
        html,
        event.pageX,
        event.pageY
    );
}

// 禁用并显示左列右键菜单
delegateEv(ul,'li','contextmenu',
    function(target,event){
        var html = '<div class="itm" data-action="delete">删除笔记本</div><div class="itm" data-action="insert">插入笔记本</div><div class="itm" data-action="update">编辑笔记本</div>';
        renderContext(target,event,html);
    }
);
//------------------------------中间列菜单----------------------------------------------
delegateEv(centerList,'li','contextmenu',
    function(target,event){
        var html = '<div class="itm" data-action="deleteNote">删除笔记</div><div class="itm" data-action="insertNote">添加笔记</div><div class="itm" data-action="updateNote">编辑笔记</div>';
        renderContext(target,event,html);
    }
);

// ----------------------------禁止选中文字,强制编辑状态中的文本完成并保存------------------------------
ul.onselectstart = function(){return false;}
centerList.onselectstart= function(){return false;}
ul.onmousedown = function(){
    finished();
};
centerList.onmousedown = function(){
    finished();
}
addnote.onmousedown = function(){
    finished();
}

})();
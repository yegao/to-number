export default function(v){
    return v.replace(/(^\.|[^(\d|\.)])/g, '').replace(/(\d+\.)(.*)/, function (s, $1, $2) {
        return $1 + $2.replace('.', '')
    }).replace(/^0([^\.])/g, '$1');
}
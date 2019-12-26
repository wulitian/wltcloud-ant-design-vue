import Mock from 'mockjs';
import { baseurl , code , builder , getBody } from "@/mock/util";

const test = (res) => {
  const body = getBody(res)
  console.log('mock: body', body)
  const data = Mock.mock({
    'list|1-10': [{
      'id|+1': 1,
       time: '@time',
       haha: '@FIRST',
    }]
  })
  return builder(data,"查询成功",code.OK,{"Content-Type":"application/json"})
}

const getToken = (res) => {
  const data = Mock.mock({
    list: {
      "token": "521677655146233856",
    }
  })
  if(getBody(res).username=='admin'&&getBody(res).password=='admin'){
    return builder(data.list,"登录成功",code.OK)
  }else{
    return builder({},"登录失败",code.LOGINERROR)
  }

}

const getUserInfo = () => {
  const data = Mock.mock({
    list: {
      "userId": "521677655146233856",
      "username": "admin",
      "domain": "@admin.com",
      "nickName": "超级管理员",
      "avatar": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "accountId": "521677655368531968",
      "accountType": "username",
    }
  })
  return builder(data.list,"查询成功",code.OK)
}

const getNav = () => {
  const data = Mock.mock({
    list:[
      {
        'name': 'workplace',
        'path':'/main/workplace',
        'parentId': 0,
        'id': 7,
        'meta': {
          'title': '工作台',
          'show': true
        },
        'component': 'WorkPlace'
      }
    ]
  })
  return builder(data.list,"查询成功",code.OK)
}

//测试
Mock.mock(baseurl+'/api/test','get',test);

//获取token
Mock.mock(baseurl+'/api/getToken','get',getToken);

//用户信息
Mock.mock(baseurl+'/api/login','get',getUserInfo);

//获取菜单
Mock.mock(baseurl+'/api/getNav','get',getNav);

export {
  Mock
}

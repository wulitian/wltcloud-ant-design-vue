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
      // dashboard
      {
        'name': 'main',
        'path':'/main',
        'parentId': 0,
        'id': 100,
        'meta': {
          'title': '管理系统',
          'show': true
        },
        'component': 'Main'
      },
      //echarts
      {
        'name': 'Echarts',
        'path':'/main/Echarts',
        'parentId': 100,
        'id': 8000,
        'meta': {
          'title': '统计图',
          'show': true
        },
        'component': 'BlankLayout'
      },
      {
        'name': 'Echarts1',
        'path':'/main/Echarts/Echarts1',
        'parentId': 8000,
        'id': 80001,
        'meta': {
          'title': '统计图1',
          'show': true
        },
        'component': 'Echarts/Echarts1'
      },
      {
        'name': 'Echarts2',
        'path':'/main/Echarts/Echarts2',
        'parentId': 8000,
        'id': 80001,
        'meta': {
          'title': '统计图2',
          'show': true
        },
        'component': 'Echarts/Echarts2'
      },
      //用户基础信息
      {
        'name': 'BasicInformationManagement',
        'path':'/main/BasicInformationManagement',
        'parentId': 100,
        'id': 1000,
        'meta': {
          'title': '基础信息管理',
          'show': true
        },
        'component': 'BlankLayout'
      },
      {
        'name': 'OrganizationManagement',
        'path':'/main/BasicInformationManagement/OrganizationManagement',
        'parentId': 1000,
        'id': 10000,
        'meta': {
          'title': '机构管理',
          'show': true
        },
        'component': 'OrganizationManagement'
      },
      {
        'name': 'DepartmentManagement',
        'path':'/main/BasicInformationManagement/DepartmentManagement',
        'parentId': 1000,
        'id': 10001,
        'meta': {
          'title': '部门管理',
          'show': true
        },
        'component': 'DepartmentManagement'
      },
      {
        'name': 'UserManagement',
        'path':'/main/BasicInformationManagement/UserManagement',
        'parentId': 1000,
        'id': 10002,
        'meta': {
          'title': '用户管理',
          'show': true
        },
        'component': 'UserManagement'
      },
      {
        'name': 'PositionManagement',
        'path':'/main/BasicInformationManagement/PositionManagement',
        'parentId': 1000,
        'id': 10003,
        'meta': {
          'title': '职位管理',
          'show': true
        },
        'component': 'PositionManagement'
      },
      //系统权限管理
      {
        'name': 'SystemPermissionsManagement',
        'path':'/main/SystemPermissionsManagement',
        'parentId': 100,
        'id': 2000,
        'meta': {
          'title': '系统权限管理',
          'show': true
        },
        'component': 'BlankLayout'
      },
      {
        'name': 'RoleManagement',
        'path':'/main/BasicInformationManagement/RoleManagement',
        'parentId': 2000,
        'id': 20000,
        'meta': {
          'title': '角色管理',
          'show': true
        },
        'component': 'RoleManagement'
      },
      {
        'name': 'MenuManagement',
        'path':'/main/BasicInformationManagement/MenuManagement',
        'parentId': 2000,
        'id': 20001,
        'meta': {
          'title': '菜单管理',
          'show': true
        },
        'component': 'MenuManagement'
      },
      //工程信息管理
      {
        'name': 'ProjectInformationManagement',
        'path':'/main/ProjectInformationManagement',
        'parentId': 100,
        'id': 3000,
        'meta': {
          'title': '工程信息管理',
          'show': true
        },
        'component': 'BlankLayout'
      },
        //工程编码
        {
          'name': 'ProjectCode',
          'path':'/main/ProjectInformationManagement/ProjectCode',
          'parentId': 3000,
          'id': 30000,
          'meta': {
            'title': '工程编码',
            'show': true
          },
          'component': 'BlankLayout'
        },
            //工程类型
            {
              'name': 'ProjectType',
              'path':'/main/ProjectInformationManagement/ProjectCode/ProjectType',
              'parentId': 30000,
              'id': 300000,
              'meta': {
                'title': '工程类型',
                'show': true
              },
              'component': 'ProjectInformationManagement/ProjectCode/ProjectType'
            },
            //工程用途
            {
              'name': 'ProjectUse',
              'path':'/main/ProjectInformationManagement/ProjectCode/ProjectUse',
              'parentId': 30000,
              'id': 300001,
              'meta': {
                'title': '工程用途',
                'show': true
              },
              'component': 'ProjectInformationManagement/ProjectCode/ProjectUse'
            },
            //结构形式
            {
              'name': 'TypeConstruction',
              'path':'/main/ProjectInformationManagement/ProjectCode/TypeConstruction',
              'parentId': 30000,
              'id': 300002,
              'meta': {
                'title': '结构形式',
                'show': true
              },
              'component': 'ProjectInformationManagement/ProjectCode/TypeConstruction'
            },
            //承揽方式
            {
              'name': 'WayContract',
              'path':'/main/ProjectInformationManagement/ProjectCode/WayContract',
              'parentId': 30000,
              'id': 300003,
              'meta': {
                'title': '承揽方式',
                'show': true
              },
              'component': 'ProjectInformationManagement/ProjectCode/WayContract'
            },
            //项目类型
            {
              'name': 'ItemType',
              'path':'/main/ProjectInformationManagement/ProjectCode/ItemType',
              'parentId': 30000,
              'id': 300004,
              'meta': {
                'title': '项目类型',
                'show': true
              },
              'component': 'ProjectInformationManagement/ProjectCode/ItemType'
            },
        //成本编码
        {
          'name': 'CostCod',
          'path':'/main/ProjectInformationManagement/CostCod',
          'parentId': 3000,
          'id': 30001,
          'meta': {
            'title': '成本编码',
            'show': true
          },
          'component': 'BlankLayout'
        },
        //成本科目
        {
          'name': 'CostSubject',
          'path':'/main/ProjectInformationManagement/CostCod/CostSubject',
          'parentId': 30001,
          'id': 300005,
          'meta': {
            'title': '成本科目定义',
            'show': true
          },
          'component': 'ProjectInformationManagement/CostCod/CostSubject'
        },
        //工程项目
        {
          'name': 'ProjectItem',
          'path':'/main/ProjectInformationManagement/ProjectItem',
          'parentId': 3000,
          'id': 30002,
          'meta': {
            'title': '工程项目',
            'show': true
          },
          'component': 'BlankLayout'
        },
          //工程管理
          {
            'name': 'ProjectManagement',
            'path':'/main/ProjectInformationManagement/ProjectItem/ProjectManagement',
            'parentId': 30002,
            'id': 300006,
            'meta': {
              'title': '工程管理',
              'show': true
            },
            'component': 'ProjectInformationManagement/ProjectItem/ProjectManagement'
          },
          //项目拆分
          {
            'name': 'ItemSplit',
            'path':'/main/ProjectInformationManagement/ProjectItem/ItemSplit',
            'parentId': 30002,
            'id': 300007,
            'meta': {
              'title': '项目拆分',
              'show': true
            },
            'component': 'ProjectInformationManagement/ProjectItem/ItemSplit'
          },
      //项目合同管理
      {
        'name': 'ItemContractManagement',
        'path':'/main/ItemContractManagement',
        'parentId': 100,
        'id': 4000,
        'meta': {
          'title': '项目合同管理',
          'show': true
        },
        'component': 'BlankLayout'
      },
        //合同类目
        {
        'name': 'ContractCategory',
        'path':'/main/ItemContractManagement/ContractCategory',
        'parentId': 4000,
        'id': 40000,
        'meta': {
          'title': '合同类目',
          'show': true
          },
        'component': 'ItemContractManagement/ContractCategory'
        },
        //合同台账
        {
          'name': 'ContractParameter',
          'path':'/main/ItemContractManagement/ContractParameter',
          'parentId': 4000,
          'id': 40001,
          'meta': {
            'title': '合同台账',
            'show': true
          },
          'component': 'ItemContractManagement/ContractParameter'
        },
        //合同代办
        {
          'name': 'ContractAgency',
          'path':'/main/ItemContractManagement/ContractAgency',
          'parentId': 4000,
          'id': 40002,
          'meta': {
            'title': '合同代办',
            'show': true
          },
          'component': 'ItemContractManagement/ContractAgency'
        },
      //项目计划控制
      {
        'name': 'ControlProjectPlan',
        'path':'/main/ControlProjectPlan',
        'parentId': 100,
        'id': 5000,
        'meta': {
          'title': '项目计划控制',
          'show': true
        },
        'component': 'BlankLayout'
      },
        //计划审核组
        {
        'name': 'PlanAuditTeam',
        'path':'/main/ControlProjectPlan/PlanAuditTeam',
        'parentId': 5000,
        'id': 50000,
        'meta': {
          'title': '计划审核组',
          'show': true
        },
        'component': 'ControlProjectPlan/PlanAuditTeam'
        },
        //计划管理
        {
          'name': 'PlanManagement',
          'path':'/main/ControlProjectPlan/PlanManagement',
          'parentId': 5000,
          'id': 50001,
          'meta': {
            'title': '计划管理',
            'show': true
          },
          'component': 'ControlProjectPlan/PlanManagement'
         },
        //计划详情
        {
          'name': 'PlanDetails',
          'path':'/main/ControlProjectPlan/PlanDetails',
          'parentId': 5000,
          'id': 50002,
          'meta': {
            'title': '计划详情',
            'show': true
          },
          'component': 'ControlProjectPlan/PlanDetails'
        },
        //计划审核组新增
        {
          'name': 'PlanAuditTeamAdd',
          'path':'/main/ControlProjectPlan/PlanAuditTeamAdd',
          'parentId': 5000,
          'id': 50003,
          'meta': {
            'title': '计划审核组新增',
            'show': true
          },
          'component': 'ControlProjectPlan/PlanAuditTeamAdd'
        },
        //计划审批
        {
          'name': 'PlanApprove',
          'path':'/main/ControlProjectPlan/PlanApprove',
          'parentId': 5000,
          'id': 500040,
          'meta': {
            'title': '计划审批',
            'show': true
          },
          'component': 'ControlProjectPlan/PlanApprove'
        },
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

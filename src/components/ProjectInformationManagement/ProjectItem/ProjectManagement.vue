<template>
  <div>
    <!-- 页头 -->
    <div class="a-header">
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <label>工程编号:</label>
          <a-input v-model="headerForm.gcbh"/>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <label>工程名称:</label>
          <a-input  v-model="headerForm.gcmc"/>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="4">
        <div class="gutter-box">
          <label>启用状态:</label>
          <a-select style="width: 100%;" v-model="headerForm.enable">
            <a-select-option value="">
              全部
            </a-select-option>
            <a-select-option value="1">
              启用
            </a-select-option>
            <a-select-option value="0">
              禁用
            </a-select-option>
          </a-select>
        </div>
      </a-col>
      <span style="margin-left: 10px">
        <a-button type="primary" @click="onSearch">查询</a-button>
        <a-button type="primary" @click="onToAdd">新增</a-button>
      </span>
    </div>
    <!-- 列表 -->
    <a-spin :spinning="spinning">
      <a-table :columns="columns" rowKey="id" :data-source="data" :pagination="false">
      <span slot="action" slot-scope="text, record">
        <a @click="onView(record)">查看</a>
        <a-divider type="vertical" />
        <a @click="onToUpdate(record)">修改</a>
        <a-divider type="vertical" />
        <a-popconfirm title="你确定删除吗？" ok-text="确定" cancel-text="取消" @confirm="onDeleteConfirm(record)" @cancel="onDeleteCancel">
          <a href="#">删除</a>
        </a-popconfirm>
      </span>
      </a-table>
    </a-spin>
    <!-- 分页 -->
    <a-pagination v-if="total>=10" style="float: right;margin-top: 10px" :total="total" :default-current="1" show-size-changer show-quick-jumper @change="onPaginationChange" @showSizeChange="onShowSizeChange"/>
    <!--弹窗-->
    <a-modal v-model="modalState" :title="modalTitle" :footer="null" width="1000px">
      <!--表单-->
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-row>
          <a-col :span="8">
            <a-form-model-item label="工程名称" prop="gcmc">
              <a-input v-model="form.gcmc"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="工程用途" prop="gcyt">
              <a-input v-model="form.gcyt"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="工程编号" prop="gcbh">
              <a-select style="width: 100%" v-model="form.gcbh">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="工程类型" prop="gclx">
              <a-select style="width: 100%" v-model="form.gclx">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="承接方式" prop="cjfs">
              <a-select style="width: 100%" v-model="form.cjfs">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="项目类型" prop="xmlx">
              <a-select style="width: 100%" v-model="form.xmlx">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="结构类型" prop="jglx">
              <a-select style="width: 100%" v-model="form.jglx">
                <a-select-option value="jack">
                  Jack
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="录入时间" prop="lrsj">
              <a-date-picker v-model="form.lrsj" />
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="项目简介" prop="xmjj">
              <a-input v-model="form.xmjj"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="项目地点" prop="xmdd">
              <a-input v-model="form.xmdd" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
        <a-form-model-item :wrapper-col="{ span: 20, offset: 3 }" :label-col="{ span: 3 }" style="margin-left: -18px" label="上传附件" prop="scfj">
          <a-upload
            style="margin-top: -40px"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :default-file-list="defaultFileList"
          >
            <a-button> <a-icon type="upload" /> 上传附件 </a-button>
          </a-upload>
        </a-form-model-item>
        </a-row>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onAdd" v-if="addStatus">
            添加
          </a-button>
          <a-button type="primary" @click="onUpdate" v-else>
            修改
          </a-button>
          <a-button style="margin-left: 10px;" @click="onResetForm">
            重置
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>

  const columns = [
    { title: '工程编号',dataIndex: 'gcbh',key: 'gcbh' },
    { title: '工程名称',dataIndex: 'gcmc',key: 'gcmc' },
    { title: '工程类型',dataIndex: 'gclx',key: 'gclx' },
    { title: '工程用途',dataIndex: 'gcyt',key: 'gcyt' },
    { title: '结构形式',dataIndex: 'jgxs',key: 'jgxs' },
    { title: '承揽方式',dataIndex: 'clfs',key: 'clfs' },
    { title: '项目类型',dataIndex: 'xmlx',key: 'xmlx' },
    { title: '描述',dataIndex: 'ms',key: 'ms' },
    { title: '启用状态',dataIndex: 'enable',key: 'enable' },
    { title: '创建时间',dataIndex: 'createTime',key: 'createTime' },
    { title: '操作',dataIndex: 'action', scopedSlots: { customRender: 'action' } },
  ];
  const data = [
    {
      id: '1',
      gcbh: '012',
      gcmc: '铁路工程',
      gclx: '土建',
      gcyt: '通车',
      jgxs: '结构形式',
      clfs: '承揽方式',
      xmlx: '项目类型',
      ms: '无',
      enable: '启用',
      createTime: '2020-10-10',
    },
    {
      id: '2',
      gcbh: '012',
      gcmc: '铁路工程',
      gclx: '土建',
      gcyt: '通车',
      jgxs: '结构形式',
      clfs: '承揽方式',
      xmlx: '项目类型',
      ms: '无',
      enable: '启用',
      createTime: '2020-10-10',
    },
  ];
  const defaultFileList=[
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    }];
  //弹窗混入
  const modalMixins = {
    data () {
      return {
        defaultFileList,
        modalState:false,
        modalTitle:'',
        addStatus:true,
      }
    },
  };
  //分页混入
  const paginationMixins = {
    data () {
      return {
        total:0
      }
    },
    created () {
    },
    methods: {
      // 分页页码改变
      onPaginationChange (pageNumber, pageSize) {
        this.page.pageNumber = pageNumber;
        this.page.pageSize = pageSize;
        this.queryOrganizationPage();
      },
      // 分页下拉改变
      onShowSizeChange (pageNumber, pageSize) {
        this.page.pageNumber = pageNumber
        this.page.pageSize = pageSize
        this.queryOrganizationPage();
      }
    }
  };
  //头部混入
  const headMixins = {
    data () {
      return {
        headerForm:{
          gcmc:'',
          gcbh:'',
          enable:''
        }
      }
    },
    methods: {
      // 搜索
      onSearch () {
      },
      // 去添加
      onToAdd () {
        this.modalState = true
        this.modalTitle = '新增工程名称';
        this.addStatus = true;
        this.form = {
          gcmc:'',
          ms:'',
          enable:1
        };
      }
    }
  };
  //表单混入
  const formModeMixins = {
    data () {
      return {
        labelCol: { span: 8 },
        wrapperCol: { span: 14 },
        id:'',
        form:{
          gcmc:'',
          gcyt:'',
          gcbh:'',
          gclx:'',
          cjfs:'',
          xmlx:'',
          jglx:'',
          lrsj:'',
          xmjj:'',
          scfj:'',
          xmdd:'',
        },
        rules: {
          gcmc: [{ required: true, message: '请输入工程名称', trigger: 'blur' }],
        }
      }
    },
    created () {
    },
    methods: {
      //添加
      onAdd(){
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            // addUser(params)
            //   .then(res => {
            //     if(res.code==2020200){
            //       console.log(res)
            //       this.onSelectUserList();
            //       this.updateModal = false;
            //       this.$message.info(res.message);
            //     }else{
            //       this.$message.info(res.message);
            //     }
            //   })
            //   .catch((e) => {
            //     console.log(e)
            //   })
          } else {
            return false;
          }
        });
      },
      //修改
      onUpdate(){
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            // updateUser(params)
            //   .then(res => {
            //     if(res.code==2020200){
            //       console.log(res)
            //       this.onSelectUserList();
            //       this.updateModal = false;
            //       this.$message.info(res.message);
            //     }else{
            //       this.$message.info(res.message);
            //     }
            //   })
            //   .catch((e) => {
            //     console.log(e)
            //   })
          } else {
            return false;
          }
        });
      },
      //重置表单
      onResetForm(){
        this.$refs.ruleForm.resetFields();
      }
    }
  }
  //列表混入
  const tableMixins = {
    data () {
      return {
        spinning:false,
        page:{
          pageNumber:1,
          pageSize:10
        },
        columns,
        data,
      }
    },
    created () {
    },
    methods: {
      // 查看
      onView (record) {
        console.log(record)
      },
      // 修改
      onToUpdate (record) {
        this.modalState = true;
        this.modalTitle = '修改工程名称';
        this.addStatus = false;
        // queryUserByid({id:record.id})
        //   .then(res => {
        //     if(res.code==2020200){
        //       this.form = {
        //         gcmc:res.data.gcmc,
        //         ms:res.data.ms,
        //         enable:res.data.enable,
        //       };
        //       this.id = res.data.id;
        //     }else{
        //       this.$message.info(res.message);
        //     }
        //   })
        //   .catch((e) => {
        //     console.log(e)
        //   })
        console.log(record)
      },
      // 删除确认
      onDeleteConfirm (record) {
        console.log(record)
      },
      // 删除取消
      onDeleteCancel (record) {
        console.log(record)
      }
    }
  };
  //vue实例
  export default {
    name: 'ProjectManagement',
    mixins: [tableMixins,modalMixins,formModeMixins,headMixins,paginationMixins],
  }
</script>

<style scoped>
  tr:last-child td {
    padding-bottom: 0;
  }
  .gutter-row{
    margin-bottom: 10px;
  }
  .gutter-box{
    padding-left: 80px;
  }
  .gutter-box>label{
    width: 72px;
    text-align: right;
    line-height: 32px;
    position: absolute;
    left: 0;
  }
</style>

import React from "react";
import "moment/locale/zh-cn";
import { Form, Input, Select, Modal,Button, Icon, Table } from "antd";
const FormItem = Form.Item;
const moment = require("moment");
moment.locale("zh-cn");

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const SelectProps = {
  showSearch: true,
  defaultActiveFirstOption: false,
  showArrow: false,
  filterOption: true,
  allowClear: true,
  optionFilterProp: "children",
  notFoundContent: "暂无数据"
};

const factories = [
  {
    title: "序号",
    dataIndex: "",
    width: "5em",
    className: "column-center",
    render: (text, record, index) => <span>{++index}</span>
  },
  {
    title: "操作",
    dataIndex: "Action",
    className: "column-light",
    width: "5em",
    render: (text, record, index) => (
      <span onClick={() => this.handleDelete(index)}>删除</span>
    )
  },
  {
    title: "工厂简称",
    dataIndex: "FactoryOr",
    className: "column-center",
    width: "12em"
  },
  {
    title: "联系人",
    dataIndex: "Contact",
    className: "column-center",
    width: "6em"
  },
  {
    title: "座机",
    dataIndex: "Phone",
    className: "column-center",
    width: "12em"
  },
  {
    title: "手机",
    dataIndex: "Mobile",
    className: "column-center",
    width: "12em"
  },
  {
    title: "详细地址",
    dataIndex: "DetailedAddress"
  }
];

const Loading = ({
  getFieldDecorator,
  customerOptions,
  PortOptions,
  CustomsDeclarationOptions,
  TradeWayOptions,
  FactoriesOptions
}) => (
  <div>
    <FormItem label="委托方" className="form-item" {...formLayout}>
      {getFieldDecorator("CustomsAgencyId", {
        rules: [{ required: false, message: "必填项" }]
      })(
        <Select {...SelectProps} placeholder="委托方">
          {customerOptions}
        </Select>
      )}
    </FormItem>
    <FormItem label="起运港" className="form-item" {...formLayout}>
      {getFieldDecorator("CustomsDataId", {
        rules: [{ required: true, message: "必填项" }]
      })(
        <Select {...SelectProps} placeholder="起运港">
          {PortOptions}
        </Select>
      )}
    </FormItem>
    <FormItem label="货重(吨)" className="form-item" {...formLayout}>
      {getFieldDecorator("GoodsWeight", {
        rules: [{ required: true }],
        initialValue: this.state.OrderTruck.GoodsWeight
          ? this.state.OrderTruck.GoodsWeight
          : ""
      })(<Input placeholder="货物重量" />)}
    </FormItem>
    <FormItem label="报关方式" className="form-item" {...formLayout}>
      {getFieldDecorator("CustomsClearanceWayId", {
        rules: [{ required: true, message: "必填项" }]
      })(
        <Select {...SelectProps} placeholder="报关方式">
          {CustomsDeclarationOptions}
        </Select>
      )}
    </FormItem>
    <FormItem label="贸易方式" className="form-item" {...formLayout}>
      {getFieldDecorator("TradeWayId", {
        rules: [{ required: true, message: "必填项" }]
      })(
        <Select {...SelectProps} placeholder="贸易方式">
          {TradeWayOptions}
        </Select>
      )}
    </FormItem>
    <FormItem label="文件" className="form-item" {...formLayout}>
      <Button style={{ width: "100%" }}>
        <Icon type="upload" />
        {this.state.OrderDetail.PvAttachmentName
          ? this.state.OrderDetail.PvAttachmentName
          : "上传文件"}
      </Button>
    </FormItem>
    <Button
      onClick={this.handleAddFactory}
      type="primary"
      style={{ marginBottom: "0.5em" }}
    >
      <Icon type="plus" theme="outlined" />
      添加工厂
    </Button>
    <Table
      pagination={false}
      rowKey={(item, index) => index}
      columns={factories}
      dataSource={this.state.OrderFactoryList}
      size="small"
      bordered={true}
    />
    <Modal
      destroyOnClose={true}
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <label style={{ lineHeight: "3em" }}>选择工厂：</label>
      <Select
        ref="SelectFactory"
        {...SelectProps}
        placeholder="工厂简称"
        style={{ width: "100%" }}
        onSelect={this.onSelected}
      >
        {FactoriesOptions}
      </Select>
    </Modal>
  </div>
);

export default Loading;

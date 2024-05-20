import dynamic from "next/dynamic";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MyProducts = dynamic(() => import("./sellerComponents/MyProducts"), {
  ssr: false,
});
const AddNewProduct = dynamic(
  () => import("./sellerComponents/Add-NewProduct"),
  {
    ssr: false,
  }
);
const OrderHistorySellerDashbord = dynamic(
  () => import("./sellerComponents/OrderHistorySellerDashbord"),
  {
    ssr: false,
  }
);
const SellerDashbord = () => {
  return (
    <div>
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            Dashbord| Seller
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
      <div className="mx-10">
        <Tabs>
          <TabList>
            <Tab>MY Products</Tab>
            <Tab>ADD NEW</Tab>
            <Tab>Orders Activity</Tab>
          </TabList>

          <TabPanel>
            <MyProducts />
          </TabPanel>
          <TabPanel>
            <AddNewProduct />
          </TabPanel>
          <TabPanel>
            <OrderHistorySellerDashbord />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SellerDashbord;

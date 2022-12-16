import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { PersonalInfo } from "./PersonalInfo";
import { Reviews } from "./Reviews";
import { Security } from "./Security";
   
  export default function SettingsIndex() {
    const data = [
      {
        label: "Personal Info",
        value: "html",
        desc: <PersonalInfo/>,
      },
      {
        label: "Security",
        value: "react",
        desc: <Security/>,
      },
   
      {
        label: "Reviews",
        value: "vue",
        desc: <Reviews/>,
      },
    ];
   
    return (
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }

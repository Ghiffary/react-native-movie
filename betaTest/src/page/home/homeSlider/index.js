import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from '../Listview';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';
import HeaderContoh from '../../../components/header'

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
      <HeaderContoh 
      title="Allstars" 
      style={{}}
      />
        {/* <Header hasTabs/> */}
        <Tabs style={{backgroundColor:'#f5f5f5'}}>

          <Tab heading={ 
                <TabHeading>
                    {/* <Icon name="camera" /> */}
                    <Text>Movie List</Text>
                </TabHeading>}>
            <Tab1 />
          </Tab>

          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            {/* <Tab2 /> */}
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            {/* <Tab3 /> */}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
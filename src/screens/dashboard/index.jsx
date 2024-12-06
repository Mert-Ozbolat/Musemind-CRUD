import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import SectionTitle from '../../components/ui/sectionTitle'
import TaskStatusCard from '../../components/dashboard/taskStatusCard'
import { defaultScreenStyles } from '../../styles/defaultSecreenStyle'
import { VictoryPie, VictoryChart, VictoryTheme } from 'victory-native'



const Dashboard = () => {

    const { taskStatus } = useSelector(state => state?.tasks);
    const countTaskStatus = () => {
        return tasks.filter(item => item?.status === status).length
    }


    const calculateTaskStatus = status => {
        const totalTask = tasks.length;
        const taskCount = tasks.filter(item => item?.status === status.length);
        const percentage = ((totalTask / taskCount) * 100).toFixed(2);
    };

    return (
        <View style={defaultScreenStyles.container}>
            <ScrollView>
                <SectionTitle title={"Project Summary"} />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: "wrap",
                    justifyContent: 'center'
                }}>
                    {
                        taskStatus.map((item, index) => (
                            <TaskStatusCard value={countTaskStatus(item.status)} item={item} key={item.id} />
                        ))
                    }
                </View>
                <SectionTitle title={"Project Statistics"} />

                <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <VictoryPie
                        innerRadius={75}
                        padAngle={1}
                        width={350}
                        height={350}
                        data={[
                            {
                                x: calculateTaskStatus(statusType.INPROGRESS),
                                y: calculateTaskStatus(statusType.INPROGRESS),
                            },
                            {
                                x: calculateTaskStatus(statusType.INREVIEW),
                                y: calculateTaskStatus(statusType.INREVIEW),
                            },
                            {
                                x: calculateTaskStatus(statusType.COMPLETED),
                                y: calculateTaskStatus(statusType.COMPLETED),
                            },
                            {
                                x: calculateTaskStatus(statusType.ONHOLD),
                                y: calculateTaskStatus(statusType.ONHOLD),
                            },
                        ]}
                    >
                    </VictoryPie>
                </View>


            </ScrollView>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})
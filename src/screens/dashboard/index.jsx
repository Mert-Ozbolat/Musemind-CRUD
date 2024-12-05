import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import SectionTitle from '../../components/ui/sectionTitle'
import TaskStatusCard from '../../components/dashboard/taskStatusCard'
import { defaultScreenStyles } from '../../styles/defaultSecreenStyle'
import { VictoryPie, VictoryChart, VictoryTheme } from 'victory-native'



const Dashboard = () => {

    const { taskStatus } = useSelector(state => state?.tasks);

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
                            <TaskStatusCard item={item} key={item.id} />
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
                            { x: '"In Progress', y: 30 },
                            { x: 'In Review', y: 30 },
                            { x: 'On Hold', y: 30 },
                            { x: 'Completed', y: 30 },
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
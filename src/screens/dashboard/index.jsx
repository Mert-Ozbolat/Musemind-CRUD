import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import SectionTitle from '../../components/ui/sectionTitle'
import TaskStatusCard from '../../components/dashboard/taskStatusCard'
import { defaultScreenStyles } from '../../styles/defaultSecreenStyle'



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
            </ScrollView>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})
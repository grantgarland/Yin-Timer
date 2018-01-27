import React from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import images from '../Themes/images';
import colors from '../Themes/colors'

const home_buttons = [
  {
    title: 'Select Routine',
    page: 'Chooser',
    icon: <Icons name="folder-images" size={30} color={colors.gong} />
  }, 
  {
    title: 'Build Routine',
    page: 'Builder',
    icon: <Icons name='tools' size={30} color={colors.gong} />
  },
  {
    title: 'View Poses',
    page: 'Poses',
    icon: <Icons name='man'size={30} color={colors.gong} />
  },
  {
    title: 'Add Pose',
    page: 'Add_Pose',
    icon: <Icons name="add-to-list" size={30} color={colors.gong} />
  }
];

export default home_buttons;
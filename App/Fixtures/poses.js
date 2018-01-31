import images from '../Themes/images';

const poses = [
  {
    name: 'Downward Facing Dog',
    targets: ['calves', 'hamstrings', 'shoulders'],
    duration: 1,
    difficulty: 2,
    image: images.downward_facing_dog,
    two_sided: false
  },
  {
    name: 'Forward Lunge',
    targets: ['groin', 'ankles'],
    duration: 2,
    difficulty: 1,
    image: images.forward_lunge,
    two_sided: true
  },
  {
    name: 'Half Saddle Fold',
    targets: ['quads', 'ankles', 'back'],
    duration: 2,
    difficulty: 2,
    image: images.half_saddle_fold,
    two_sided: true
  },
  {
    name: 'Open Side Straddle',
    targets: ['groin', 'hamstrings', 'back'],
    duration: 2,
    difficulty: 3,
    image: images.open_side_straddle,
    two_sided: true
  },
  {
    name: 'Saddle',
    targets: ['quads', 'ankles'],
    duration: 2,
    difficulty: 2,
    image: images.saddle,
    two_sided: false
  },
  {
    name: 'Upward Facing Dog',
    targets: ['back', 'abdomen'],
    duration: 1,
    difficulty: 1,
    image: images.seal,
    two_sided: false
  },
  {
    name: 'Seated Cross Shin',
    targets: ['groin', 'knees', 'back'],
    duration: 2,
    difficulty: 1,
    image: images.seated_cross_shin,
    two_sided: false
  },
  {
    name: 'Seated Side Straddle',
    targets: ['groin', 'hamstrings'],
    duration: 2,
    difficulty: 2,
    image: images.open_side_straddle,
    two_sided: true
  },
  {
    name: 'Seated Straddle',
    targets: ['groin', 'back', 'hamstrings'],
    duration: 3,
    difficulty: 3,
    image: images.seated_straddle,
    two_sided: false
  },
  {
    name: 'Single Leg Forward Fold',
    targets: ['groin', 'calves', 'hamstrings'],
    duration: 2,
    difficulty: 2,
    image: images.single_leg_forward_fold,
    two_sided: true
  },
  {
    name: 'Standing Forward Fold',
    targets: ['back', 'hamstrings'],
    duration: 1,
    difficulty: 1,
    image: images.standing_forward_fold,
    two_sided: false
  }
];

export default poses;
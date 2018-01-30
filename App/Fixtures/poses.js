import images from '../Themes/images';

const poses = [
  {
    name: 'Downward Facing Dog',
    targets: ['calves', 'hamstrings'],
    duration: 1,
    image: images.downward_facing_dog,
    two_sided: false
  },
  {
    name: 'Forward Lunge',
    targets: ['groin', 'ankle'],
    duration: 2,
    image: images.forward_lunge,
    two_sided: true
  },
  {
    name: 'Half Saddle Fold',
    targets: ['quads', 'ankle', 'back'],
    duration: 2,
    image: images.half_saddle_fold,
    two_sided: true
  },
  {
    name: 'Open Side Straddle',
    targets: ['groin', 'hamstrings', 'back'],
    duration: 2,
    image: images.open_side_straddle,
    two_sided: true
  },
  {
    name: 'Saddle',
    targets: ['quads', 'ankle'],
    duration: 2,
    image: images.saddle,
    two_sided: false
  },
  {
    name: 'Seal',
    targets: ['back'],
    duration: 1,
    image: images.seal,
    two_sided: false
  },
  {
    name: 'Seated Cross Shin',
    targets: ['groin'],
    duration: 2,
    image: images.seated_cross_shin,
    two_sided: false
  },
  {
    name: 'Seated Side Straddle',
    targets: ['groin', 'hamstrings'],
    duration: 2,
    image: images.open_side_straddle,
    two_sided: true
  },
  {
    name: 'Seated Straddle',
    targets: ['groin', 'back', 'hamstrings'],
    duration: 3,
    image: images.seated_straddle,
    two_sided: false
  },
  {
    name: 'Single Leg Forward Fold',
    targets: ['groin', 'calves', 'hamstrings'],
    duration: 2,
    image: images.single_leg_forward_fold,
    two_sided: true
  },
  {
    name: 'Standing Forward Fold',
    targets: ['back', 'hamstrings'],
    duration: 1,
    image: images.standing_forward_fold,
    two_sided: false
  }
];

export default poses;
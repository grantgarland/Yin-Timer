import images from '../Themes/images';

const poses = [
  {
    name: 'Downward Facing Dog',
    targets: [{area: 'calves'}, {area: 'hamstrings'}, {area: 'upper back'}],
    duration: 1,
    twoSided: false,
    image: images.downward_facing_dog,
    two_sided: false
  },
  {
    name: 'Forward Lunge',
    targets: [{area: 'calves'}, {area: 'hips'}, {area: 'quads'}],
    duration: 2,
    twoSided: true,
    image: images.forward_lunge,
    two_sided: true
  },
  {
    name: 'Half Saddle Fold',
    targets: [{area: 'quads'}, {area: 'ankles'}, {area: 'lower back'}],
    duration: 2,
    twoSided: false,
    image: images.half_saddle_fold,
    two_sided: true
  },
  {
    name: 'Saddle',
    targets: [{area: 'quads'}, {area: 'ankes'}],
    duration: 4,
    twoSided: false,
    image: images.saddle,
    two_sided: false
  },
  {
    name: 'Upward Facing Dog',
    targets: [{area: 'lower back'}, {area: 'abdomen'}],
    duration: 1,
    twoSided: false,
    image: images.seal,
    two_sided: false
  },
  {
    name: 'Seated Cross Shin',
    targets: [{area: 'groin'}, {area: 'lower back'}, {area: 'hips'}],
    duration: 3,
    twoSided: true,
    image: images.seated_cross_shin,
    two_sided: false
  },
  {
    name: 'Seated Side Straddle',
    targets: [{area: 'groin'}, {area: 'hips'}, {area: 'upper back'}],
    duration: 2,
    twoSided: true,
    image: images.open_side_straddle,
    two_sided: true
  },
  {
    name: 'Seated Straddle',
    targets: [{area: 'groin'}, {area: 'lower back'}, {area: 'hamstrings'}],
    duration: 4,
    twoSided: false,
    image: images.seated_straddle,
    two_sided: false
  },
  {
    name: 'Single Leg Forward Fold',
    targets: [{area: 'hips'}, {area: 'hamstrings'}, {area: 'lower back'}],
    duration: 2,
    twoSided: true,
    image: images.single_leg_forward_fold,
    two_sided: true
  },
  {
    name: 'Standing Forward Fold',
    targets: [{area: 'lower back'}, {area: 'hamstrings'}],
    duration: 2,
    twoSided: false,
    image: images.standing_forward_fold,
    two_sided: false
  }
];

export default poses;
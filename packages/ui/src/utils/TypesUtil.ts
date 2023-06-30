export type ColorType =
  | 'blue-100'
  | 'error-100'
  | 'fg-100'
  | 'fg-200'
  | 'fg-300'
  | 'inherit'
  | 'inverse-000'
  | 'inverse-100'
  | 'success-100'

export type SizeType = 'inherit' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

export type SpacingType = '3xl' | '3xs' | '4xs' | 'l' | 'm' | 's' | 'xl' | 'xs' | 'xxl' | 'xxs'

export type BorderRadiusType = Exclude<SpacingType, 'xl' | 'xxl'>

export type FlexDirectionType = 'column-reverse' | 'column' | 'row-reverse' | 'row'

export type FlexWrapType = 'nowrap' | 'wrap-reverse' | 'wrap'

export type FlexBasisType = 'auto' | 'content' | 'fit-content' | 'max-content' | 'min-content'

export type FlexGrowType = '0' | '1'

export type FlexShrinkType = '0' | '1'

export type AlignItemsType = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'

export type JustifyContentType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
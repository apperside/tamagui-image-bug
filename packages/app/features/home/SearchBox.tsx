import { GetProps, Input, Stack, styled, XStack } from '@my/ui'
import { Search, X } from '@tamagui/feather-icons'

export const SearchInput = styled(Input, {
  backgroundColor: '$backgroundLight',
  pl: 30,
  px:30,
  bw: 1,
  pr: 30,
  borderColor: '#00000000',
  color: 'white',
  // ... your custom styles here
})
type SearchBoxProps = GetProps<typeof SearchInput>

export const SearchBox = SearchInput.extractable(
  ({
    children,
    onChange,
    isLoading = false,
    ...props
  }: SearchBoxProps & {
    onChange?: (text: string) => void
    isLoading?: boolean
  }) => {
    return (
      <XStack alignItems={'center'} position="relative">
        <SearchInput flex={1} {...props} />
        <Stack left={2} position="absolute">
          <Search size={25} />
        </Stack>
        <Stack right={2} position="absolute">
          <X size={25} />
        </Stack>
      </XStack>
    )
  }
)

export default SearchBox

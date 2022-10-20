import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  XStack,
  YStack,
  Sheet,
  Image,
  Label,
  Input,
  ScrollView,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/feather-icons'
import { useModal } from 'app/hooks/useModal'
import { appSelectors } from 'app/redux'
import { loadingActions } from 'app/redux/loading/reducer'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useLink } from 'solito/link'
import image from '../../assets/favicon.png'

const ModalContent = () => {
  const isLoading = useSelector(appSelectors.loading.isLoadingSelector)

  return <Label>IS LOADING: {String(isLoading)}</Label>
}
export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  const modal = useModal()
  const dispatch = useDispatch()

  console.log('modal is', modal)
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>
        <Image src={image} width={20} height={20} />
        <Separator />
        <Paragraph ta="center">
          Tamagui is made by{' '}
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate Wienert
          </Anchor>
          , give it a star{' '}
          <Anchor href="https://github.com/tamagui/tamagui" target="_blank" rel="noreferrer">
            on Github
          </Anchor>
          {/* <Button
            onClick={() => {
              dispatch(loadingActions.showLoading(true))
              modal.showModal({
                title: 'Modal titlone',
                children: <ModalContent />,
                onConfirmClick: modal.hideModal,
              })
            }}
          >
            OPEN MODAL
          </Button> */}
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame>
          <Sheet.Handle />
          <YStack
            position="absolute"
            left={0}
            top={0}
            right={0}
            bottom={'20%'}//bottom must be 100 minus the current snap point percentage, in this case is 80
            overflow="hidden"
            bw={1}
          >
            <YStack px="$3" height={'80%'} overflow="scroll" bw={1} boc="yellow">
              <Sheet.ScrollView>
                  <KeyboardAvoidingView>
                    <Label>1</Label>
                    <Input my="$5" bc="red" />
                    <Label>2</Label>
                    <Input my="$5" bc="red" />
                    <Label>3</Label>
                    <Input my="$5" bc="red" />
                    <Label>4</Label>
                    <Input my="$5" bc="red" />
                    <Label>5</Label>
                    <Input my="$5" bc="red" />
                    <Label>6</Label>
                    <Input my="$5" bc="red" />
                    <Label>7</Label>
                    <Input my="$5" bc="red" />
                    <Label>8</Label>
                    <Input my="$5" bc="red" />
                    <Label>9</Label>
                    <Input my="$5" bc="red" />
                    <Label>10</Label>
                    <Input my="$5" bc="red" />
                  </KeyboardAvoidingView>
              </Sheet.ScrollView>
            </YStack>
          </YStack>
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

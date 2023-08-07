import { Card, CardBody, Skeleton } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width='300px'>
        <Skeleton height= "200px" borderRadius={10} overflow='hidden' />
        <CardBody>
            <Skeleton />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
import {
    Grid, Box, Flex, Stack, Text, Heading, Button,
    GridItem
} from "@chakra-ui/react"

function Pagination(props) {
    const { current, onChange, total } = props
    const prev = <Button style={{ border: "1px", background: "gray" }} disabled={current === 1} onClick={() => onChange(current - 1)} > &#8592;</Button>
    const next = <Button style={{ border: "1px", background: "gray" }} disabled={current === 10} onClick={() => onChange(current + 1)}  >  &#8594;</Button>

    const pages = new Array(total).fill(0).map((el, i) =>
        <Button border="1px solid black" margin="3px" onClick={() => onChange(i + 1)} disabled={current === (i + 1)} >{i + 1}</Button>
    )




    return (

        <Box>
            {prev}
            {pages}
            {next}
        </Box>

    )
}
export default Pagination
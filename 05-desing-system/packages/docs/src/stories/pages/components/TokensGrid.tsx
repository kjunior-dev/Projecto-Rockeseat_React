import {Table, TableCell, TableHeader, TableRow} from "../styles/tokens.ts";

interface TokensGridProps {
    tokens: Record<string, string>;
    hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
    return (
        <Table>
            <thead>
            <tr>
                <TableHeader>Token Name</TableHeader>
                <TableHeader>Value</TableHeader>
                {hasRemValue && <TableHeader>Pixels</TableHeader>}
            </tr>
            </thead>

            <tbody>
            {Object.entries(tokens).map(([key, value]) => {
                return (
                    <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                        {hasRemValue && (
                            <TableCell>{Number(value.replace('rem', '')) * 16}px</TableCell>
                        )}
                    </TableRow>
                );
            })}
            </tbody>
        </Table>
    );
}

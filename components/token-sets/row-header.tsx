import { Row } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TokenSetRecord } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

export function RowHeader({
  row,
}: {
  row: Row<z.infer<typeof TokenSetRecord>>;
}) {
  const tokenSet = row.original.tokenSet;
  const [progress, setProgress] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    try {
      if (!tokenSet.note) return;
      const note = JSON.parse(tokenSet.note);
      if (!note) return;

      const { progress, endTs } = note;
      if (progress && endTs) {
        setProgress(Math.round(progress));
        setEndDate(new Date(endTs));
      }
    } catch {
      return;
    }
  }, [tokenSet.note]);

  if (!progress || !endDate) {
    return null;
  }

  return (
    <tr key={row.id + "header"}>
      <td
        colSpan={row.getVisibleCells().length - 1}
        className="w-full px-4 pt-4 text-center"
      >
        <div className="flex items-center justify-center gap-2">
          <Badge
            variant="outline"
            className="flex items-center gap-1 text-muted-foreground"
          >
            <span className="text-xs font-mono">{progress}%</span>
            <span className="text-xs font-mono uppercase">
              {row.original.tokenSet.name}
            </span>
          </Badge>
          <Progress
            value={progress}
            className="h-2 [&>*]:bg-muted-foreground bg-secondary"
          />
          <Badge variant="outline">
            <span className="text-xs font-mono text-muted-foreground">
              {formatDate(endDate)}
            </span>
          </Badge>
        </div>
      </td>
      <td colSpan={1}>&nbsp;</td>
    </tr>
  );
}

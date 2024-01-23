import * as React from "react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

export function Split() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Split</CardTitle>
        <CardDescription>Split your bill between your friends.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" placeholder="Total Bill Amount" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Category</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Food</SelectItem>
                  <SelectItem value="sveltekit">Clothes</SelectItem>
                  <SelectItem value="astro">Petrol</SelectItem>
                  <SelectItem value="nuxt">Bhai chaara</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Split</Button>
      </CardFooter>
    </Card>
  )
}


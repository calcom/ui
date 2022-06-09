import * as React from 'react';

export type EntryProps = {
  id: number;
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
};

export type PanelProps = {
  items: EntryProps[];
};

export const Panel = ({ items }: PanelProps) => (
  <ul>
    {items.map((item) => (
      <li
        key={item.id}
        className="relative p-3 rounded-md hover:bg-coolGray-100"
      >
        <h3 className="text-sm font-medium leading-5">{item.title}</h3>

        <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
          <li>{item.date}</li>
          <li>&middot;</li>
          <li>{item.commentCount} comments</li>
          <li>&middot;</li>
          <li>{item.shareCount} shares</li>
        </ul>

        <a
          href="#"
          className="absolute inset-0 rounded-md focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
        />
      </li>
    ))}
  </ul>
);

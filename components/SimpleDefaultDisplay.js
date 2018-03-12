import React from 'react';
import Link from 'next/link';

const SimpleDefaultDisplay = (props) => {
  const { content } = props;

  const renderContent = (data, id) => {
    const  { title, href } = data;

    return (
      <li className="item" key={id}>
        <Link href={href}>
          <a>{title}</a>
        </Link>

        <style jsx>{`
          .item {
            flex: 1;
            display: flex;
            justify-content: center;
          }

          a:hover {
            color: #fc5f45;
            cursor: pointer;
          }

          a {
            display: inline-block;
            font-size: 14px;
            color: #8890a4;
            width: 133px;
            line-height: 65px;
            text-align: center;
          }
        `}
        </style>
      </li>
    )
  }

  return (
    <section>
      <ul className='simple-display'>
        {content.map((data, id)=> renderContent(data, id))}
      </ul>

      <style jsx>{`
        .simple-display {
          display: flex;
        }
      `}
      </style>
    </section>
  )
};

export default SimpleDefaultDisplay;
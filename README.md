# Project: typeORMとpostgresを使ってRESTapiを自作する
**このリポジトリはCode Chrysalisの生徒であるときに作成しました**
**（This was created during my time as a student at Code Chrysalis）**

## 目標

- Express/GraphQL, および Relational database を使用してCRUD APIサービスを作成する
- APIのテストを書く
- 興味のあるデータを使って、データベースをセットアップする
- APIエンドポイントをドキュメント化して、他のデベロッパーが使用できるようにする（つまり、美しいREADMEを作成する）
- 基本的/シンプルなフロントエンドを作成する

## 技術環境設定
1. Database: Postgres
   - Postgres(https://www.postgresql.org/)をダウンロード、インストールしましょう。
   - データベースを作成しましょう。（psql -> CREATE DATABASE ~~）
2. Server: Express
3. Development Runtime: Node.js
   - nodeのバージョンを確認してください。
4. ORM Framework: TypeORM
5. API Testing Runtime: Insomnia

## ormconfigの設定
自身で作成したローカルデータベースの情報を、ormconfig.tsファイル(または.envファイル)へ書き込みましょう。

## Entity/Migration/Seedの設定手順
### Entity＆Migration
- Mountainのエンティティクラスについてファイルが用意されています。（src -> entityフォルダ内）
- yarn makeMigration -n CreateMountain でマイグレーションファイルが作成されます。
- yarn migrate でマイグレーションファイルに基づいたテーブルがDBに作成されます。
- psql -> \c dbtable -> \dtでテーブルが作成されているか確認しましょう。
- SELECT * FROM dbtableで中の情報が空になっていることを確認出来ます。
### Seed
- テーブル作成が確認出来たら、Seedを使用して初期データを投入します。
- src->seedsフォルダ格納のCreateDummyMountain.ts及びmountains.jsonを確認してください。
- yarn seed　コマンドでmountains.jsonファイル中身をテーブルへ投入します。
- psql -> \c dbtable -> SELECT * FROM dbtableでデータを確認しましょう。

##　index.ts/RESTApiの説明
エントリーポイントファイルはindex.tsとしています。
API接続用のポート番号は：3000です。
各種エンドポイントの説明は下記の通りです。

GET: /api/mountain
 - DBに登録済みの全ての山の情報を取得するEP
GET: /api/mountain/id
 - 指定されたidの山の情報を取得するEP
POST: /api/mountain
 - ユーザーが入力した情報に基づいた新しい山データを作成するEP
PATCH: /api/mountain/:id 
 - 指定されたidの山の一部の情報を、ユーザーが入力した情報に基づき修正するEP
DELETE: /api/mountain/:id 
 - 指定されたidの山をデータベースから削除するEP



## 参考Links
・本プロジェクトの詳しい目標、概要、要件については下記リンク先を参考にして下さい
https://docs.google.com/document/d/e/2PACX-1vSsDA7s0cvpWPD3I9ZcHV1fsvAJLogZTYZmwXnurM6K7qb4WZUp-qqYh2H2wN8S_Puw03UwIUFd8RWX/pub
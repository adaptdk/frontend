import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Array: any
  JsonArgument: any
}

export type AssetContainer = {
  __typename?: 'AssetContainer'
  handle: Scalars['String']
  title: Scalars['String']
}

export type AssetInterface = {
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type AssetInterfacePagination = {
  __typename?: 'AssetInterfacePagination'
  /** Current page of the cursor */
  current_page: Scalars['Int']
  /** List of items on the current page */
  data: Maybe<Array<Maybe<AssetInterface>>>
  /** Number of the first item returned */
  from: Maybe<Scalars['Int']>
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']
  /** The last page (number of pages) */
  last_page: Scalars['Int']
  /** Number of items returned per page */
  per_page: Scalars['Int']
  /** Number of the last item returned */
  to: Maybe<Scalars['Int']>
  /** Number of total items selected by the query */
  total: Scalars['Int']
}

export type Asset_All = AssetInterface & {
  __typename?: 'Asset_All'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Assets = AssetInterface & {
  __typename?: 'Asset_Assets'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  class: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Business = AssetInterface & {
  __typename?: 'Asset_Business'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Magazine = AssetInterface & {
  __typename?: 'Asset_Magazine'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Medier = AssetInterface & {
  __typename?: 'Asset_Medier'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Pages = AssetInterface & {
  __typename?: 'Asset_Pages'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Providers = AssetInterface & {
  __typename?: 'Asset_Providers'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Subsidies = AssetInterface & {
  __typename?: 'Asset_Subsidies'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type Asset_Testimonials = AssetInterface & {
  __typename?: 'Asset_Testimonials'
  alt: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  container: AssetContainer
  edit_url: Maybe<Scalars['String']>
  extension: Scalars['String']
  focus_css: Maybe<Scalars['String']>
  folder: Maybe<Scalars['String']>
  height: Maybe<Scalars['Float']>
  id: Scalars['String']
  is_audio: Maybe<Scalars['Boolean']>
  is_image: Maybe<Scalars['Boolean']>
  is_video: Maybe<Scalars['Boolean']>
  last_modified: Maybe<Scalars['String']>
  orientation: Maybe<Scalars['String']>
  path: Scalars['String']
  permalink: Maybe<Scalars['String']>
  ratio: Maybe<Scalars['Float']>
  size: Maybe<Scalars['String']>
  size_b: Maybe<Scalars['Int']>
  size_bytes: Maybe<Scalars['Int']>
  size_gb: Maybe<Scalars['Float']>
  size_gigabytes: Maybe<Scalars['Float']>
  size_kb: Maybe<Scalars['Float']>
  size_kilobytes: Maybe<Scalars['Float']>
  size_mb: Maybe<Scalars['Float']>
  size_megabytes: Maybe<Scalars['Float']>
  url: Maybe<Scalars['String']>
  width: Maybe<Scalars['Float']>
}

export type BardText = {
  __typename?: 'BardText'
  text: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Code = {
  __typename?: 'Code'
  code: Scalars['String']
  mode: Scalars['String']
}

export type Collection = {
  __typename?: 'Collection'
  handle: Scalars['String']
  structure: Maybe<CollectionStructure>
  title: Scalars['String']
}

export type CollectionStructure = {
  __typename?: 'CollectionStructure'
  expects_root: Scalars['Boolean']
  handle: Scalars['String']
  max_depth: Maybe<Scalars['Int']>
  title: Scalars['String']
  tree: Maybe<Array<Maybe<CollectionTreeBranch>>>
}

export type CollectionStructuretreeArgs = {
  site: InputMaybe<Scalars['String']>
}

export type CollectionTreeBranch = {
  __typename?: 'CollectionTreeBranch'
  children: Maybe<Array<Maybe<CollectionTreeBranch>>>
  depth: Scalars['Int']
  entry: Maybe<EntryInterface>
  /** @deprecated Replaced by `entry` */
  page: Maybe<EntryInterface>
}

export type DateRange = {
  __typename?: 'DateRange'
  end: Maybe<Scalars['String']>
  start: Maybe<Scalars['String']>
}

export type DateRangeendArgs = {
  format: InputMaybe<Scalars['String']>
}

export type DateRangestartArgs = {
  format: InputMaybe<Scalars['String']>
}

export type EntryInterface = {
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type EntryInterfacedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type EntryInterfacelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type EntryInterfacePagination = {
  __typename?: 'EntryInterfacePagination'
  /** Current page of the cursor */
  current_page: Scalars['Int']
  /** List of items on the current page */
  data: Maybe<Array<Maybe<EntryInterface>>>
  /** Number of the first item returned */
  from: Maybe<Scalars['Int']>
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']
  /** The last page (number of pages) */
  last_page: Scalars['Int']
  /** Number of items returned per page */
  per_page: Scalars['Int']
  /** Number of the last item returned */
  to: Maybe<Scalars['Int']>
  /** Number of total items selected by the query */
  total: Scalars['Int']
}

export type Entry_Advice_Article = EntryInterface & {
  __typename?: 'Entry_Advice_Article'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  footer_content: Maybe<Array<Maybe<Sets_FooterContent>>>
  hero_image: Maybe<AssetInterface>
  hide_title: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Advice_ArticledateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Advice_Articlelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Advice_Frontpage = EntryInterface & {
  __typename?: 'Entry_Advice_Frontpage'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  headline: Maybe<Scalars['String']>
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  sub_text: Maybe<Scalars['String']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Advice_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Advice_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Advice_Themepage = EntryInterface & {
  __typename?: 'Entry_Advice_Themepage'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  hero_image: AssetInterface
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sub_title: Scalars['String']
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Advice_ThemepagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Advice_Themepagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Form = EntryInterface & {
  __typename?: 'Entry_Business_Form'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  formular: Maybe<Form>
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  success_link: Maybe<Scalars['String']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Business_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Frontpage = EntryInterface & {
  __typename?: 'Entry_Business_Frontpage'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  hero_body: Maybe<Scalars['String']>
  hero_image: AssetInterface
  hero_link: Maybe<Scalars['String']>
  hero_link_title: Maybe<Scalars['String']>
  hero_title: Scalars['String']
  hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Business_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Shadow = EntryInterface & {
  __typename?: 'Entry_Business_Shadow'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  shadowing: Maybe<EntryInterface>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Business_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Standard = EntryInterface & {
  __typename?: 'Entry_Business_Standard'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Business_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Business_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Commercials_Commercials = EntryInterface & {
  __typename?: 'Entry_Commercials_Commercials'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  poster_image: AssetInterface
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
  video: AssetInterface
}

export type Entry_Commercials_CommercialsdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Commercials_Commercialslast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_ElementWithTextAndIllustration_ElementWithTextAndIllustration = EntryInterface & {
  __typename?: 'Entry_ElementWithTextAndIllustration_ElementWithTextAndIllustration'
  background: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_section: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  heading_family: Maybe<LabeledValue>
  heading_type: Maybe<LabeledValue>
  id: Scalars['ID']
  illustration: LabeledValue
  last_modified: Maybe<Scalars['String']>
  layout: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  text: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_ElementWithTextAndIllustration_ElementWithTextAndIllustrationdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_ElementWithTextAndIllustration_ElementWithTextAndIllustrationlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Article = EntryInterface & {
  __typename?: 'Entry_Magazine_Article'
  author: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  cover_image: Maybe<AssetInterface>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  magazine_terms: Maybe<Array<Maybe<TermInterface>>>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  published_at: Maybe<Scalars['String']>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Magazine_ArticledateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Articlelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Articlepublished_atArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Frontpage = EntryInterface & {
  __typename?: 'Entry_Magazine_Frontpage'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  editorial: Maybe<Array<Maybe<GridItem_Editorial>>>
  entries: Maybe<Array<Maybe<GridItem_Entries>>>
  heading: Maybe<Scalars['String']>
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  magazine_terms: Maybe<Array<Maybe<TermInterface>>>
  manchet: Maybe<Scalars['String']>
  operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  read_more: Maybe<Array<Maybe<EntryInterface>>>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Magazine_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Shadow = EntryInterface & {
  __typename?: 'Entry_Magazine_Shadow'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  magazine_terms: Maybe<Array<Maybe<TermInterface>>>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  shadowing: Maybe<EntryInterface>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Magazine_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Standard = EntryInterface & {
  __typename?: 'Entry_Magazine_Standard'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  magazine_terms: Maybe<Array<Maybe<TermInterface>>>
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Magazine_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Magazine_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_OverFooter_OverFooter = EntryInterface & {
  __typename?: 'Entry_OverFooter_OverFooter'
  blueprint: Maybe<Scalars['String']>
  button: Maybe<Scalars['String']>
  button_link: Scalars['String']
  button_style: LabeledValue
  button_text: Scalars['String']
  collection: Collection
  date: Maybe<Scalars['String']>
  description: Scalars['String']
  edit_url: Scalars['String']
  id: Scalars['ID']
  image: LabeledValue
  last_modified: Maybe<Scalars['String']>
  layout: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_OverFooter_OverFooterdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_OverFooter_OverFooterlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Addon = EntryInterface & {
  __typename?: 'Entry_Pages_Addon'
  addon_color: LabeledValue
  addons: Maybe<Array<Maybe<Sets_Addons>>>
  back_button: Maybe<Scalars['String']>
  back_link: Maybe<Scalars['String']>
  back_text: Maybe<Scalars['String']>
  blueprint: Maybe<Scalars['String']>
  button_link: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  col_1_title: Maybe<Scalars['String']>
  col_2_title: Maybe<Scalars['String']>
  col_3_title: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  header_content: Maybe<Scalars['String']>
  header_image: AssetInterface
  heading: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  mobile_heading: Maybe<Scalars['String']>
  over_footer_element: Maybe<EntryInterface>
  paragraph: Maybe<Scalars['String']>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  rows: Maybe<Array<Maybe<Sets_Rows>>>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  table_title: Maybe<Scalars['String']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_AddondateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Addonlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_AddonOverview = EntryInterface & {
  __typename?: 'Entry_Pages_AddonOverview'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_AddonOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_AddonOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Form = EntryInterface & {
  __typename?: 'Entry_Pages_Form'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  formular: Maybe<Form>
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  success_link: Maybe<Scalars['String']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Frontpage = EntryInterface & {
  __typename?: 'Entry_Pages_Frontpage'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  hero_body: Maybe<Scalars['String']>
  hero_image: AssetInterface
  hero_link: Maybe<Scalars['String']>
  hero_link_title: Maybe<Scalars['String']>
  hero_title: Scalars['String']
  hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_GroupOverview = EntryInterface & {
  __typename?: 'Entry_Pages_GroupOverview'
  blueprint: Maybe<Scalars['String']>
  button_link: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  groups: Maybe<Array<Maybe<Sets_Groups>>>
  header_image: AssetInterface
  heading: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  mobile_heading: Maybe<Scalars['String']>
  over_footer_element: Maybe<EntryInterface>
  paragraph: Maybe<Scalars['String']>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_GroupOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_GroupOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Standard = EntryInterface & {
  __typename?: 'Entry_Pages_Standard'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_SubsidyOverview = EntryInterface & {
  __typename?: 'Entry_Pages_SubsidyOverview'
  blueprint: Maybe<Scalars['String']>
  categories: Maybe<Array<Maybe<Sets_Categories>>>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  illustration: Maybe<AssetInterface>
  increased_subsidy: Maybe<Array<Maybe<GridItem_IncreasedSubsidy>>>
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  subsidy_link_1: Maybe<Scalars['String']>
  subsidy_link_2: Maybe<Scalars['String']>
  subsidy_link_title_1: Maybe<Scalars['String']>
  subsidy_link_title_2: Maybe<Scalars['String']>
  template: Maybe<Scalars['String']>
  text1: Maybe<Scalars['String']>
  text2: Maybe<Scalars['String']>
  text3: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_SubsidyOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_SubsidyOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Tilskud = EntryInterface & {
  __typename?: 'Entry_Pages_Tilskud'
  banner_title: Scalars['String']
  blueprint: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  electronic_reporting_and_eu: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  list: Maybe<Array<Maybe<Scalars['String']>>>
  locale: Scalars['String']
  modal_content: Maybe<Scalars['String']>
  modal_headline1: Maybe<Scalars['String']>
  modal_headline2: Maybe<Scalars['String']>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  subsidy_categories: Maybe<TermInterface>
  subsidy_entries: Maybe<Array<Maybe<EntryInterface>>>
  subsidy_requirement_text1: Maybe<Scalars['String']>
  subsidy_requirement_text2: Maybe<Scalars['String']>
  subsidy_years: Maybe<TermInterface>
  template: Maybe<Scalars['String']>
  text1: Maybe<Scalars['String']>
  text2: Maybe<Scalars['String']>
  text3: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Pages_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Pages_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Providers_Frontpage = EntryInterface & {
  __typename?: 'Entry_Providers_Frontpage'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  hero_body: Maybe<Scalars['String']>
  hero_image: AssetInterface
  hero_link: Maybe<Scalars['String']>
  hero_link_title: Maybe<Scalars['String']>
  hero_title: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Providers_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Providers_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Providers_Shadow = EntryInterface & {
  __typename?: 'Entry_Providers_Shadow'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  shadowing: Maybe<EntryInterface>
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  template: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Providers_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Providers_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Providers_Standard = EntryInterface & {
  __typename?: 'Entry_Providers_Standard'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Array<Maybe<Sets_Content>>>
  date: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  keywords: Maybe<Scalars['String']>
  large_paragraph: Maybe<Scalars['String']>
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  over_footer_element: Maybe<EntryInterface>
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  sticky: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  title_font: LabeledValue
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Providers_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Providers_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_StepByStep_StepByStep = EntryInterface & {
  __typename?: 'Entry_StepByStep_StepByStep'
  blueprint: Maybe<Scalars['String']>
  button: Maybe<Scalars['String']>
  button_link: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  steps: Maybe<Array<Maybe<Sets_Steps>>>
  steps_section: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_StepByStep_StepByStepdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_StepByStep_StepBySteplast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Testimonials_Testimonials = EntryInterface & {
  __typename?: 'Entry_Testimonials_Testimonials'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  group: Maybe<LabeledValue>
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  name: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  profile_image: AssetInterface
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  testimonial: Scalars['String']
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Testimonials_TestimonialsdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Testimonials_Testimonialslast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Tilskud_Tilskud = EntryInterface & {
  __typename?: 'Entry_Tilskud_Tilskud'
  blueprint: Maybe<Scalars['String']>
  collection: Collection
  content: Maybe<Scalars['String']>
  date: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  hide_columns: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  last_modified: Maybe<Scalars['String']>
  locale: Scalars['String']
  parent: Maybe<EntryInterface>
  permalink: Maybe<Scalars['String']>
  private: Scalars['Boolean']
  published: Scalars['Boolean']
  site: Site
  slug: Scalars['String']
  status: Scalars['String']
  subsidy_categories: TermInterface
  subsidy_table_groups: Array<Maybe<LabeledValue>>
  subsidy_table_section: Maybe<Array<Maybe<Sets_SubsidyTableSection>>>
  subsidy_years: TermInterface
  titel: Maybe<Scalars['String']>
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Entry_Tilskud_TilskudcontentArgs = {
  format?: InputMaybe<Scalars['String']>
}

export type Entry_Tilskud_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Entry_Tilskud_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type Field = {
  __typename?: 'Field'
  config: Maybe<Scalars['Array']>
  display: Scalars['String']
  handle: Scalars['String']
  instructions: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Form = {
  __typename?: 'Form'
  fields: Maybe<Array<Maybe<Field>>>
  handle: Scalars['String']
  honeypot: Maybe<Scalars['String']>
  rules: Maybe<Scalars['Array']>
  title: Scalars['String']
}

export type GlobalSetInterface = {
  handle: Scalars['String']
  site: Site
  title: Scalars['String']
}

export type GlobalSet_404Settings = GlobalSetInterface & {
  __typename?: 'GlobalSet_404Settings'
  handle: Scalars['String']
  site: Site
  text: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type GlobalSet_ConsentSettings = GlobalSetInterface & {
  __typename?: 'GlobalSet_ConsentSettings'
  approved_message: Maybe<Scalars['String']>
  consent_text: Maybe<Scalars['String']>
  denied_message: Maybe<Scalars['String']>
  handle: Scalars['String']
  page: Maybe<Scalars['String']>
  page_title: Maybe<Scalars['String']>
  read_more: Maybe<Scalars['String']>
  site: Site
  slug: Maybe<Scalars['String']>
  text: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type GlobalSet_DanmarkTesten = GlobalSetInterface & {
  __typename?: 'GlobalSet_DanmarkTesten'
  debug: Maybe<Scalars['Boolean']>
  handle: Scalars['String']
  intro: Maybe<Scalars['String']>
  questions: Maybe<Scalars['String']>
  results: Maybe<Array<Maybe<Sets_Results>>>
  site: Site
  title: Scalars['String']
}

export type GlobalSet_MagazineFacebook = GlobalSetInterface & {
  __typename?: 'GlobalSet_MagazineFacebook'
  handle: Scalars['String']
  site: Site
  title: Scalars['String']
}

export type GlobalSet_MagazineLegalInfo = GlobalSetInterface & {
  __typename?: 'GlobalSet_MagazineLegalInfo'
  handle: Scalars['String']
  site: Site
  text: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type GlobalSet_MagazineSymptomcheck = GlobalSetInterface & {
  __typename?: 'GlobalSet_MagazineSymptomcheck'
  handle: Scalars['String']
  link: Maybe<Scalars['String']>
  link_text: Maybe<Scalars['String']>
  site: Site
  text: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type GlobalSet_Seo = GlobalSetInterface & {
  __typename?: 'GlobalSet_Seo'
  handle: Scalars['String']
  site: Site
  title: Scalars['String']
}

export type GridItem_Cards = {
  __typename?: 'GridItem_Cards'
  illustration: AssetInterface
  link: Scalars['String']
  text: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type GridItem_Categories_Symbols = {
  __typename?: 'GridItem_Categories_Symbols'
  subsidy_symbol_icon: Maybe<LabeledValue>
  subsidy_symbol_text: Maybe<Scalars['String']>
}

export type GridItem_Editorial = {
  __typename?: 'GridItem_Editorial'
  editorial: Maybe<Scalars['String']>
  editorial_button: Maybe<Scalars['String']>
  editorial_button_link: Maybe<Scalars['String']>
  editorial_button_text: Maybe<Scalars['String']>
  editorial_content: Maybe<Scalars['String']>
  editorial_title: Maybe<Scalars['String']>
}

export type GridItem_Entries = {
  __typename?: 'GridItem_Entries'
  article: Maybe<EntryInterface>
  text: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type GridItem_HeroUspElements = {
  __typename?: 'GridItem_HeroUspElements'
  icon: LabeledValue
  text: Scalars['String']
}

export type GridItem_IncreasedSubsidy = {
  __typename?: 'GridItem_IncreasedSubsidy'
  subsidy_symbol_icon: Maybe<LabeledValue>
  subsidy_symbol_text: Maybe<Scalars['String']>
}

export type LabeledValue = {
  __typename?: 'LabeledValue'
  label: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type NavBasicPage_Business = NavPage_Business &
  PageInterface & {
    __typename?: 'NavBasicPage_Business'
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavBasicPage_BusinessFooter = NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavBasicPage_BusinessFooter'
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavBasicPage_MagazineFooter = NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavBasicPage_MagazineFooter'
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavBasicPage_Pages = NavPage_Pages &
  PageInterface & {
    __typename?: 'NavBasicPage_Pages'
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavBasicPage_PagesFooter = NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavBasicPage_PagesFooter'
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavBasicPage_Providers = NavPage_Providers &
  PageInterface & {
    __typename?: 'NavBasicPage_Providers'
    entry_id: Maybe<Scalars['ID']>
    hidden_felt: Maybe<Scalars['String']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavBasicPage_ProvidersFooter = NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavBasicPage_ProvidersFooter'
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavBasicPage_Universes = NavPage_Universes &
  PageInterface & {
    __typename?: 'NavBasicPage_Universes'
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    permalink: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Business_Form = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Business_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Business_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Business_Frontpage = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Business_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Business_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Business_Shadow = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Business_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Business_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Business_Standard = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Business_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Business_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Addon = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
    addon_color: LabeledValue
    addons: Maybe<Array<Maybe<Sets_Addons>>>
    back_button: Maybe<Scalars['String']>
    back_link: Maybe<Scalars['String']>
    back_text: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    col_1_title: Maybe<Scalars['String']>
    col_2_title: Maybe<Scalars['String']>
    col_3_title: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    header_content: Maybe<Scalars['String']>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    rows: Maybe<Array<Maybe<Sets_Rows>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    table_title: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_AddondateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Addonlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_AddonOverview = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_AddonOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_AddonOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Form = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Frontpage = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_GroupOverview = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    groups: Maybe<Array<Maybe<Sets_Groups>>>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_GroupOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_GroupOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Standard = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_SubsidyOverview = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
    blueprint: Maybe<Scalars['String']>
    categories: Maybe<Array<Maybe<Sets_Categories>>>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    illustration: Maybe<AssetInterface>
    increased_subsidy: Maybe<Array<Maybe<GridItem_IncreasedSubsidy>>>
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_link_1: Maybe<Scalars['String']>
    subsidy_link_2: Maybe<Scalars['String']>
    subsidy_link_title_1: Maybe<Scalars['String']>
    subsidy_link_title_2: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_SubsidyOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_SubsidyOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Tilskud = EntryInterface &
  NavPage_BusinessFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
    banner_title: Scalars['String']
    blueprint: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    electronic_reporting_and_eu: Maybe<Scalars['Boolean']>
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    list: Maybe<Array<Maybe<Scalars['String']>>>
    locale: Scalars['String']
    modal_content: Maybe<Scalars['String']>
    modal_headline1: Maybe<Scalars['String']>
    modal_headline2: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_categories: Maybe<TermInterface>
    subsidy_entries: Maybe<Array<Maybe<EntryInterface>>>
    subsidy_requirement_text1: Maybe<Scalars['String']>
    subsidy_requirement_text2: Maybe<Scalars['String']>
    subsidy_years: Maybe<TermInterface>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_BusinessFooter_Pages_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_BusinessFooter_Pages_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Form = EntryInterface &
  NavPage_Business &
  PageInterface & {
    __typename?: 'NavEntryPage_Business_Business_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Business_Business_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Frontpage = EntryInterface &
  NavPage_Business &
  PageInterface & {
    __typename?: 'NavEntryPage_Business_Business_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Business_Business_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Shadow = EntryInterface &
  NavPage_Business &
  PageInterface & {
    __typename?: 'NavEntryPage_Business_Business_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Business_Business_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Standard = EntryInterface &
  NavPage_Business &
  PageInterface & {
    __typename?: 'NavEntryPage_Business_Business_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Business_Business_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Business_Business_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Article = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
    author: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    cover_image: Maybe<AssetInterface>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    published_at: Maybe<Scalars['String']>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Magazine_ArticledateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Articlelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Articlepublished_atArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Frontpage = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    editorial: Maybe<Array<Maybe<GridItem_Editorial>>>
    entries: Maybe<Array<Maybe<GridItem_Entries>>>
    entry_id: Maybe<Scalars['ID']>
    heading: Maybe<Scalars['String']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    manchet: Maybe<Scalars['String']>
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    read_more: Maybe<Array<Maybe<EntryInterface>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Magazine_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Shadow = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Magazine_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Standard = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Magazine_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Magazine_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Addon = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
    addon_color: LabeledValue
    addons: Maybe<Array<Maybe<Sets_Addons>>>
    back_button: Maybe<Scalars['String']>
    back_link: Maybe<Scalars['String']>
    back_text: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    col_1_title: Maybe<Scalars['String']>
    col_2_title: Maybe<Scalars['String']>
    col_3_title: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    header_content: Maybe<Scalars['String']>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    rows: Maybe<Array<Maybe<Sets_Rows>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    table_title: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_AddondateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Addonlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_AddonOverview = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_AddonOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_AddonOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Form = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Frontpage = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_GroupOverview = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    groups: Maybe<Array<Maybe<Sets_Groups>>>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_GroupOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_GroupOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Standard = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_SubsidyOverview = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
    blueprint: Maybe<Scalars['String']>
    categories: Maybe<Array<Maybe<Sets_Categories>>>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    illustration: Maybe<AssetInterface>
    increased_subsidy: Maybe<Array<Maybe<GridItem_IncreasedSubsidy>>>
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_link_1: Maybe<Scalars['String']>
    subsidy_link_2: Maybe<Scalars['String']>
    subsidy_link_title_1: Maybe<Scalars['String']>
    subsidy_link_title_2: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_SubsidyOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_SubsidyOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Tilskud = EntryInterface &
  NavPage_MagazineFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
    banner_title: Scalars['String']
    blueprint: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    electronic_reporting_and_eu: Maybe<Scalars['Boolean']>
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    list: Maybe<Array<Maybe<Scalars['String']>>>
    locale: Scalars['String']
    modal_content: Maybe<Scalars['String']>
    modal_headline1: Maybe<Scalars['String']>
    modal_headline2: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_categories: Maybe<TermInterface>
    subsidy_entries: Maybe<Array<Maybe<EntryInterface>>>
    subsidy_requirement_text1: Maybe<Scalars['String']>
    subsidy_requirement_text2: Maybe<Scalars['String']>
    subsidy_years: Maybe<TermInterface>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_MagazineFooter_Pages_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_MagazineFooter_Pages_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Addon = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'
    addon_color: LabeledValue
    addons: Maybe<Array<Maybe<Sets_Addons>>>
    back_button: Maybe<Scalars['String']>
    back_link: Maybe<Scalars['String']>
    back_text: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    col_1_title: Maybe<Scalars['String']>
    col_2_title: Maybe<Scalars['String']>
    col_3_title: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    header_content: Maybe<Scalars['String']>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    rows: Maybe<Array<Maybe<Sets_Rows>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    table_title: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_AddondateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Addonlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_AddonOverview = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_AddonOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_AddonOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Form = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Frontpage = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_GroupOverview = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    groups: Maybe<Array<Maybe<Sets_Groups>>>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_GroupOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_GroupOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Standard = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_SubsidyOverview = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
    blueprint: Maybe<Scalars['String']>
    categories: Maybe<Array<Maybe<Sets_Categories>>>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    illustration: Maybe<AssetInterface>
    increased_subsidy: Maybe<Array<Maybe<GridItem_IncreasedSubsidy>>>
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_link_1: Maybe<Scalars['String']>
    subsidy_link_2: Maybe<Scalars['String']>
    subsidy_link_title_1: Maybe<Scalars['String']>
    subsidy_link_title_2: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_SubsidyOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_SubsidyOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Tilskud = EntryInterface &
  NavPage_PagesFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
    banner_title: Scalars['String']
    blueprint: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    electronic_reporting_and_eu: Maybe<Scalars['Boolean']>
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    list: Maybe<Array<Maybe<Scalars['String']>>>
    locale: Scalars['String']
    modal_content: Maybe<Scalars['String']>
    modal_headline1: Maybe<Scalars['String']>
    modal_headline2: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_categories: Maybe<TermInterface>
    subsidy_entries: Maybe<Array<Maybe<EntryInterface>>>
    subsidy_requirement_text1: Maybe<Scalars['String']>
    subsidy_requirement_text2: Maybe<Scalars['String']>
    subsidy_years: Maybe<TermInterface>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_PagesFooter_Pages_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_PagesFooter_Pages_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Addon = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_Addon'
    addon_color: LabeledValue
    addons: Maybe<Array<Maybe<Sets_Addons>>>
    back_button: Maybe<Scalars['String']>
    back_link: Maybe<Scalars['String']>
    back_text: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    col_1_title: Maybe<Scalars['String']>
    col_2_title: Maybe<Scalars['String']>
    col_3_title: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    header_content: Maybe<Scalars['String']>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    rows: Maybe<Array<Maybe<Sets_Rows>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    table_title: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_AddondateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Addonlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_AddonOverview = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_AddonOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_AddonOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Form = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Frontpage = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_GroupOverview = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    groups: Maybe<Array<Maybe<Sets_Groups>>>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_GroupOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_GroupOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Standard = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_SubsidyOverview = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
    blueprint: Maybe<Scalars['String']>
    categories: Maybe<Array<Maybe<Sets_Categories>>>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    illustration: Maybe<AssetInterface>
    increased_subsidy: Maybe<Array<Maybe<GridItem_IncreasedSubsidy>>>
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_link_1: Maybe<Scalars['String']>
    subsidy_link_2: Maybe<Scalars['String']>
    subsidy_link_title_1: Maybe<Scalars['String']>
    subsidy_link_title_2: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_SubsidyOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_SubsidyOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Tilskud = EntryInterface &
  NavPage_Pages &
  PageInterface & {
    __typename?: 'NavEntryPage_Pages_Pages_Tilskud'
    banner_title: Scalars['String']
    blueprint: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    electronic_reporting_and_eu: Maybe<Scalars['Boolean']>
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    list: Maybe<Array<Maybe<Scalars['String']>>>
    locale: Scalars['String']
    modal_content: Maybe<Scalars['String']>
    modal_headline1: Maybe<Scalars['String']>
    modal_headline2: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_categories: Maybe<TermInterface>
    subsidy_entries: Maybe<Array<Maybe<EntryInterface>>>
    subsidy_requirement_text1: Maybe<Scalars['String']>
    subsidy_requirement_text2: Maybe<Scalars['String']>
    subsidy_years: Maybe<TermInterface>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Pages_Pages_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Pages_Pages_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Addon = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
    addon_color: LabeledValue
    addons: Maybe<Array<Maybe<Sets_Addons>>>
    back_button: Maybe<Scalars['String']>
    back_link: Maybe<Scalars['String']>
    back_text: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    col_1_title: Maybe<Scalars['String']>
    col_2_title: Maybe<Scalars['String']>
    col_3_title: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    header_content: Maybe<Scalars['String']>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    rows: Maybe<Array<Maybe<Sets_Rows>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    table_title: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_AddondateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Addonlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_AddonOverview = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_AddonOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_AddonOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Form = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Frontpage = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_GroupOverview = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    groups: Maybe<Array<Maybe<Sets_Groups>>>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_GroupOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_GroupOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Standard = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_SubsidyOverview = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
    blueprint: Maybe<Scalars['String']>
    categories: Maybe<Array<Maybe<Sets_Categories>>>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    illustration: Maybe<AssetInterface>
    increased_subsidy: Maybe<Array<Maybe<GridItem_IncreasedSubsidy>>>
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_link_1: Maybe<Scalars['String']>
    subsidy_link_2: Maybe<Scalars['String']>
    subsidy_link_title_1: Maybe<Scalars['String']>
    subsidy_link_title_2: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_SubsidyOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_SubsidyOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Tilskud = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
    banner_title: Scalars['String']
    blueprint: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    electronic_reporting_and_eu: Maybe<Scalars['Boolean']>
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    list: Maybe<Array<Maybe<Scalars['String']>>>
    locale: Scalars['String']
    modal_content: Maybe<Scalars['String']>
    modal_headline1: Maybe<Scalars['String']>
    modal_headline2: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_categories: Maybe<TermInterface>
    subsidy_entries: Maybe<Array<Maybe<EntryInterface>>>
    subsidy_requirement_text1: Maybe<Scalars['String']>
    subsidy_requirement_text2: Maybe<Scalars['String']>
    subsidy_years: Maybe<TermInterface>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Pages_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Pages_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Providers_Frontpage = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Providers_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Providers_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Providers_Shadow = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Providers_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Providers_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Providers_Standard = EntryInterface &
  NavPage_ProvidersFooter &
  PageInterface & {
    __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_ProvidersFooter_Providers_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_ProvidersFooter_Providers_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Providers_Providers_Frontpage = EntryInterface &
  NavPage_Providers &
  PageInterface & {
    __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hidden_felt: Maybe<Scalars['String']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Providers_Providers_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Providers_Providers_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Providers_Providers_Shadow = EntryInterface &
  NavPage_Providers &
  PageInterface & {
    __typename?: 'NavEntryPage_Providers_Providers_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hidden_felt: Maybe<Scalars['String']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Providers_Providers_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Providers_Providers_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Providers_Providers_Standard = EntryInterface &
  NavPage_Providers &
  PageInterface & {
    __typename?: 'NavEntryPage_Providers_Providers_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hidden_felt: Maybe<Scalars['String']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Providers_Providers_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Providers_Providers_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Form = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Business_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Business_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Frontpage = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Business_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Business_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Shadow = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Business_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Business_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Standard = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Business_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Business_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Business_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Article = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Magazine_Article'
    author: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    cover_image: Maybe<AssetInterface>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    published_at: Maybe<Scalars['String']>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Magazine_ArticledateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Articlelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Articlepublished_atArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Frontpage = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    editorial: Maybe<Array<Maybe<GridItem_Editorial>>>
    entries: Maybe<Array<Maybe<GridItem_Entries>>>
    entry_id: Maybe<Scalars['ID']>
    heading: Maybe<Scalars['String']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    manchet: Maybe<Scalars['String']>
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    read_more: Maybe<Array<Maybe<EntryInterface>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Magazine_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Shadow = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Magazine_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Standard = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Magazine_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    magazine_terms: Maybe<Array<Maybe<TermInterface>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Magazine_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Magazine_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Addon = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_Addon'
    addon_color: LabeledValue
    addons: Maybe<Array<Maybe<Sets_Addons>>>
    back_button: Maybe<Scalars['String']>
    back_link: Maybe<Scalars['String']>
    back_text: Maybe<Scalars['String']>
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    col_1_title: Maybe<Scalars['String']>
    col_2_title: Maybe<Scalars['String']>
    col_3_title: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    header_content: Maybe<Scalars['String']>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    rows: Maybe<Array<Maybe<Sets_Rows>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    table_title: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_AddondateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Addonlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_AddonOverview = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_AddonOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_AddonOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Form = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_Form'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    formular: Maybe<Form>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    success_link: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_FormdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Formlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Frontpage = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    hero_usp_elements: Maybe<Array<Maybe<GridItem_HeroUspElements>>>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_GroupOverview = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
    blueprint: Maybe<Scalars['String']>
    button_link: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    groups: Maybe<Array<Maybe<Sets_Groups>>>
    header_image: AssetInterface
    heading: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    mobile_heading: Maybe<Scalars['String']>
    over_footer_element: Maybe<EntryInterface>
    paragraph: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_GroupOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_GroupOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Standard = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_SubsidyOverview = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
    blueprint: Maybe<Scalars['String']>
    categories: Maybe<Array<Maybe<Sets_Categories>>>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    illustration: Maybe<AssetInterface>
    increased_subsidy: Maybe<Array<Maybe<GridItem_IncreasedSubsidy>>>
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_link_1: Maybe<Scalars['String']>
    subsidy_link_2: Maybe<Scalars['String']>
    subsidy_link_title_1: Maybe<Scalars['String']>
    subsidy_link_title_2: Maybe<Scalars['String']>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_SubsidyOverviewdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_SubsidyOverviewlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Tilskud = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Pages_Tilskud'
    banner_title: Scalars['String']
    blueprint: Maybe<Scalars['String']>
    button_text: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    electronic_reporting_and_eu: Maybe<Scalars['Boolean']>
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    list: Maybe<Array<Maybe<Scalars['String']>>>
    locale: Scalars['String']
    modal_content: Maybe<Scalars['String']>
    modal_headline1: Maybe<Scalars['String']>
    modal_headline2: Maybe<Scalars['String']>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    subsidy_categories: Maybe<TermInterface>
    subsidy_entries: Maybe<Array<Maybe<EntryInterface>>>
    subsidy_requirement_text1: Maybe<Scalars['String']>
    subsidy_requirement_text2: Maybe<Scalars['String']>
    subsidy_years: Maybe<TermInterface>
    template: Maybe<Scalars['String']>
    text1: Maybe<Scalars['String']>
    text2: Maybe<Scalars['String']>
    text3: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Pages_TilskuddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Pages_Tilskudlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Providers_Frontpage = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    hero_body: Maybe<Scalars['String']>
    hero_image: AssetInterface
    hero_link: Maybe<Scalars['String']>
    hero_link_title: Maybe<Scalars['String']>
    hero_title: Scalars['String']
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    operating_statuses: Maybe<Array<Maybe<Sets_OperatingStatuses>>>
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    replicator_content: Maybe<Array<Maybe<Sets_ReplicatorContent>>>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Providers_FrontpagedateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Providers_Frontpagelast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Providers_Shadow = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Providers_Shadow'
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    date: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    shadowing: Maybe<EntryInterface>
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    template: Maybe<Scalars['String']>
    titel: Scalars['String']
    title: Scalars['String']
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Providers_ShadowdateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Providers_Shadowlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Providers_Standard = EntryInterface &
  NavPage_Universes &
  PageInterface & {
    __typename?: 'NavEntryPage_Universes_Providers_Standard'
    background_color: Maybe<LabeledValue>
    background_color_magazine: Maybe<LabeledValue>
    blueprint: Maybe<Scalars['String']>
    collection: Collection
    content: Maybe<Array<Maybe<Sets_Content>>>
    date: Maybe<Scalars['String']>
    description: Maybe<Scalars['String']>
    edit_url: Scalars['String']
    entry_id: Maybe<Scalars['ID']>
    id: Scalars['ID']
    keywords: Maybe<Scalars['String']>
    large_paragraph: Maybe<Scalars['String']>
    last_modified: Maybe<Scalars['String']>
    locale: Scalars['String']
    over_footer_element: Maybe<EntryInterface>
    parent: Maybe<EntryInterface>
    permalink: Maybe<Scalars['String']>
    private: Scalars['Boolean']
    published: Scalars['Boolean']
    site: Site
    slug: Scalars['String']
    status: Scalars['String']
    sticky: Maybe<Scalars['Boolean']>
    titel: Scalars['String']
    title: Scalars['String']
    title_font: LabeledValue
    uri: Maybe<Scalars['String']>
    url: Maybe<Scalars['String']>
  }

export type NavEntryPage_Universes_Providers_StandarddateArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavEntryPage_Universes_Providers_Standardlast_modifiedArgs = {
  format: InputMaybe<Scalars['String']>
}

export type NavPage_Business = {
  titel: Scalars['String']
}

export type NavPage_BusinessFooter = {
  titel: Scalars['String']
}

export type NavPage_MagazineFooter = {
  titel: Scalars['String']
}

export type NavPage_Pages = {
  titel: Scalars['String']
}

export type NavPage_PagesFooter = {
  titel: Scalars['String']
}

export type NavPage_Providers = {
  hidden_felt: Maybe<Scalars['String']>
}

export type NavPage_ProvidersFooter = {
  titel: Scalars['String']
}

export type NavPage_Universes = {
  titel: Scalars['String']
}

export type NavTreeBranch = {
  __typename?: 'NavTreeBranch'
  children: Maybe<Array<Maybe<NavTreeBranch>>>
  depth: Scalars['Int']
  page: Maybe<PageInterface>
}

export type Navigation = {
  __typename?: 'Navigation'
  expects_root: Scalars['Boolean']
  handle: Scalars['String']
  max_depth: Maybe<Scalars['Int']>
  title: Scalars['String']
  tree: Maybe<Array<Maybe<NavTreeBranch>>>
}

export type NavigationtreeArgs = {
  site: InputMaybe<Scalars['String']>
}

export type PageInterface = {
  entry_id: Maybe<Scalars['ID']>
  id: Scalars['ID']
  permalink: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  asset: Maybe<AssetInterface>
  assetContainer: Maybe<AssetContainer>
  assetContainers: Maybe<Array<Maybe<AssetContainer>>>
  assets: Maybe<AssetInterfacePagination>
  collection: Maybe<Collection>
  collections: Maybe<Array<Maybe<Collection>>>
  entries: Maybe<EntryInterfacePagination>
  entry: Maybe<EntryInterface>
  form: Maybe<Form>
  forms: Maybe<Array<Maybe<Form>>>
  globalSet: Maybe<GlobalSetInterface>
  globalSets: Maybe<Array<Maybe<GlobalSetInterface>>>
  nav: Maybe<Navigation>
  navs: Maybe<Array<Maybe<Navigation>>>
  ping: Maybe<Scalars['String']>
  sites: Maybe<Array<Maybe<Site>>>
  taxonomies: Maybe<Array<Maybe<Taxonomy>>>
  taxonomy: Maybe<Taxonomy>
  term: Maybe<TermInterface>
  terms: Maybe<TermInterfacePagination>
  user: Maybe<User>
  users: Maybe<UserPagination>
}

export type QueryassetArgs = {
  container: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['String']>
  path: InputMaybe<Scalars['String']>
}

export type QueryassetContainerArgs = {
  handle: InputMaybe<Scalars['String']>
}

export type QueryassetsArgs = {
  container: Scalars['String']
  limit: InputMaybe<Scalars['Int']>
  page: InputMaybe<Scalars['Int']>
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QuerycollectionArgs = {
  handle: InputMaybe<Scalars['String']>
}

export type QueryentriesArgs = {
  collection: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  filter: InputMaybe<Scalars['JsonArgument']>
  limit: InputMaybe<Scalars['Int']>
  page: InputMaybe<Scalars['Int']>
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryentryArgs = {
  collection: InputMaybe<Scalars['String']>
  filter: InputMaybe<Scalars['JsonArgument']>
  id: InputMaybe<Scalars['String']>
  site: InputMaybe<Scalars['String']>
  slug: InputMaybe<Scalars['String']>
  uri: InputMaybe<Scalars['String']>
}

export type QueryformArgs = {
  handle: InputMaybe<Scalars['String']>
}

export type QueryglobalSetArgs = {
  handle: InputMaybe<Scalars['String']>
  site: InputMaybe<Scalars['String']>
}

export type QuerynavArgs = {
  handle: InputMaybe<Scalars['String']>
}

export type QuerytaxonomyArgs = {
  handle: InputMaybe<Scalars['String']>
}

export type QuerytermArgs = {
  id: InputMaybe<Scalars['String']>
}

export type QuerytermsArgs = {
  filter: InputMaybe<Scalars['JsonArgument']>
  limit: InputMaybe<Scalars['Int']>
  page: InputMaybe<Scalars['Int']>
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  taxonomy: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryuserArgs = {
  email: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['String']>
}

export type QueryusersArgs = {
  filter: InputMaybe<Scalars['JsonArgument']>
  limit: InputMaybe<Scalars['Int']>
  page: InputMaybe<Scalars['Int']>
  sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Role = {
  __typename?: 'Role'
  handle: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type Set_Accordions_Accordion = {
  __typename?: 'Set_Accordions_Accordion'
  content: Array<Maybe<Sets_Content>>
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_Addons_Addon = {
  __typename?: 'Set_Addons_Addon'
  addon_description: Scalars['String']
  addon_link: Scalars['String']
  addon_title: Scalars['String']
  type: Scalars['String']
}

export type Set_Addons_TilvalgsKort = {
  __typename?: 'Set_Addons_TilvalgsKort'
  button: Maybe<Scalars['String']>
  button_link: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  coverage: Maybe<Array<Maybe<Scalars['String']>>>
  from_price: Maybe<Scalars['Boolean']>
  payment_deadline: Maybe<LabeledValue>
  price: Scalars['Int']
  sub_title: Scalars['String']
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_Categories_Kategori = {
  __typename?: 'Set_Categories_Kategori'
  groups: Maybe<Array<Maybe<LabeledValue>>>
  subsidy_categories: Maybe<TermInterface>
  subsidy_page: Maybe<EntryInterface>
  symbols: Maybe<Array<Maybe<GridItem_Categories_Symbols>>>
  title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_Accordion = {
  __typename?: 'Set_Content_Accordion'
  accordions: Maybe<Array<Maybe<Sets_Accordions>>>
  type: Scalars['String']
}

export type Set_Content_AktuelleArtikler = {
  __typename?: 'Set_Content_AktuelleArtikler'
  description: Maybe<Scalars['String']>
  entries: Maybe<Array<Maybe<EntryInterface>>>
  title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_ArticleTeaser = {
  __typename?: 'Set_Content_ArticleTeaser'
  cover_image: AssetInterface
  cover_video: Maybe<AssetInterface>
  description: Scalars['String']
  headline: Maybe<Scalars['String']>
  link: Scalars['String']
  link_text: Scalars['String']
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_Content_ArticleTeaserGroup = {
  __typename?: 'Set_Content_ArticleTeaserGroup'
  headline: Maybe<Scalars['String']>
  replicator: Maybe<Array<Maybe<Sets_Replicator>>>
  type: Scalars['String']
}

export type Set_Content_AudioPlayer = {
  __typename?: 'Set_Content_AudioPlayer'
  audio_file: AssetInterface
  audio_title: Scalars['String']
  type: Scalars['String']
}

export type Set_Content_CookieSamtykke = {
  __typename?: 'Set_Content_CookieSamtykke'
  type: Scalars['String']
}

export type Set_Content_DanmarkTesten = {
  __typename?: 'Set_Content_DanmarkTesten'
  type: Scalars['String']
}

export type Set_Content_ElementMTekstOgBillede = {
  __typename?: 'Set_Content_ElementMTekstOgBillede'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  bodytext: Maybe<Scalars['String']>
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_section: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  image_business: Maybe<AssetInterface>
  image_magazine: Maybe<AssetInterface>
  image_pages: Maybe<AssetInterface>
  image_providers: Maybe<AssetInterface>
  layout: Maybe<Scalars['String']>
  layout_direction: Maybe<LabeledValue>
  title: Scalars['String']
  title_font: LabeledValue
  title_size: LabeledValue
  type: Scalars['String']
  universe: LabeledValue
}

export type Set_Content_ElementWithTextAndIllustration = {
  __typename?: 'Set_Content_ElementWithTextAndIllustration'
  background: Maybe<LabeledValue>
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_section: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  heading_family: Maybe<LabeledValue>
  heading_type: Maybe<LabeledValue>
  illustration: LabeledValue
  layout: Maybe<Scalars['String']>
  layout_direction: Maybe<LabeledValue>
  text: Maybe<Scalars['String']>
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_Content_ElementWithTextAndTwoCards = {
  __typename?: 'Set_Content_ElementWithTextAndTwoCards'
  cards: Maybe<Array<Maybe<GridItem_Cards>>>
  text: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_EmneArtikler = {
  __typename?: 'Set_Content_EmneArtikler'
  entries: Maybe<Array<Maybe<EntryInterface>>>
  magazine_term: Maybe<TermInterface>
  type: Scalars['String']
}

export type Set_Content_Emneoversigt = {
  __typename?: 'Set_Content_Emneoversigt'
  title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_Facts = {
  __typename?: 'Set_Content_Facts'
  color: Maybe<LabeledValue>
  color_standard: Maybe<LabeledValue>
  fill: Maybe<LabeledValue>
  text_field: Maybe<Array<Maybe<Sets_TextField>>>
  type: Scalars['String']
}

export type Set_Content_Figure = {
  __typename?: 'Set_Content_Figure'
  caption: Maybe<Scalars['String']>
  image: Maybe<AssetInterface>
  type: Scalars['String']
}

export type Set_Content_FindMedlemsmode = {
  __typename?: 'Set_Content_FindMedlemsmode'
  type: Scalars['String']
}

export type Set_Content_Image = {
  __typename?: 'Set_Content_Image'
  assets: Maybe<AssetInterface>
  caption: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_Knap = {
  __typename?: 'Set_Content_Knap'
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  type: Scalars['String']
}

export type Set_Content_LeadFamily = {
  __typename?: 'Set_Content_LeadFamily'
  display_smaller: Maybe<Scalars['Boolean']>
  lead_family_url: Scalars['String']
  type: Scalars['String']
}

export type Set_Content_Pdf = {
  __typename?: 'Set_Content_Pdf'
  button_type: Maybe<LabeledValue>
  file: Maybe<AssetInterface>
  link_title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_ReadMoreWithLink = {
  __typename?: 'Set_Content_ReadMoreWithLink'
  link_title: Maybe<Scalars['String']>
  page_link: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_Reklamefilm = {
  __typename?: 'Set_Content_Reklamefilm'
  commercials: Array<Maybe<EntryInterface>>
  type: Scalars['String']
}

export type Set_Content_StepByStep = {
  __typename?: 'Set_Content_StepByStep'
  steps_element: Maybe<EntryInterface>
  type: Scalars['String']
}

export type Set_Content_Telefon = {
  __typename?: 'Set_Content_Telefon'
  phone_number: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Content_Testimonials = {
  __typename?: 'Set_Content_Testimonials'
  testimonials: Maybe<Array<Maybe<EntryInterface>>>
  testimonials_title: Scalars['String']
  type: Scalars['String']
}

export type Set_Content_TidsSkema = {
  __typename?: 'Set_Content_TidsSkema'
  heading: Maybe<Scalars['String']>
  heading_size: Maybe<LabeledValue>
  language: Maybe<LabeledValue>
  type: Scalars['String']
}

export type Set_Content_VideoPlayer = {
  __typename?: 'Set_Content_VideoPlayer'
  description: Maybe<Scalars['String']>
  large_video: Maybe<Scalars['Boolean']>
  type: Scalars['String']
  video: AssetInterface
  video_poster: Maybe<AssetInterface>
}

export type Set_FooterContent_ArticleTeaserGroup = {
  __typename?: 'Set_FooterContent_ArticleTeaserGroup'
  headline: Maybe<Scalars['String']>
  replicator: Maybe<Array<Maybe<Sets_Replicator>>>
  type: Scalars['String']
}

export type Set_FooterContent_ElementWithTextAndIllustration = {
  __typename?: 'Set_FooterContent_ElementWithTextAndIllustration'
  background: Maybe<LabeledValue>
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_section: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  heading_family: Maybe<LabeledValue>
  heading_type: Maybe<LabeledValue>
  illustration: LabeledValue
  layout: Maybe<Scalars['String']>
  layout_direction: Maybe<LabeledValue>
  text: Maybe<Scalars['String']>
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_Groups_GruppeKort = {
  __typename?: 'Set_Groups_GruppeKort'
  addons: Maybe<Array<Maybe<Sets_Addons>>>
  coverage: Maybe<Array<Maybe<Scalars['String']>>>
  description: Scalars['String']
  details: Maybe<Scalars['String']>
  from_price: Maybe<Scalars['Boolean']>
  gruop_selection: LabeledValue
  payment_deadline: Maybe<LabeledValue>
  popular_subsidy: Maybe<Array<Maybe<Scalars['String']>>>
  price: Scalars['Int']
  primary_group_title: Scalars['String']
  requirements: Maybe<Scalars['String']>
  requirements_description: Scalars['String']
  requirements_link: Maybe<Scalars['String']>
  requirements_title: Scalars['String']
  secondary_group_title: Scalars['String']
  signup: Maybe<Scalars['String']>
  signup_link: Maybe<Scalars['String']>
  signup_text: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_NewsWidgetElements_Nyhed = {
  __typename?: 'Set_NewsWidgetElements_Nyhed'
  description: Scalars['String']
  hide_universe_tag: Maybe<Scalars['Boolean']>
  highlighted_link_text: Scalars['String']
  image_business: Maybe<AssetInterface>
  image_magazine: Maybe<AssetInterface>
  image_pages: Maybe<AssetInterface>
  image_providers: Maybe<AssetInterface>
  link_entry: EntryInterface
  title: Scalars['String']
  type: Scalars['String']
  universe: LabeledValue
}

export type Set_OperatingStatuses_OperatingStatus = {
  __typename?: 'Set_OperatingStatuses_OperatingStatus'
  enabled: Maybe<Scalars['Boolean']>
  message_button_icon: Maybe<LabeledValue>
  message_button_link: Maybe<Scalars['String']>
  message_button_text: Maybe<Scalars['String']>
  message_text: Maybe<Scalars['String']>
  message_title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_ReplicatorContent_ArticleTeaser = {
  __typename?: 'Set_ReplicatorContent_ArticleTeaser'
  cover_image: AssetInterface
  cover_video: Maybe<AssetInterface>
  description: Scalars['String']
  headline: Maybe<Scalars['String']>
  link: Scalars['String']
  link_text: Scalars['String']
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_ReplicatorContent_ArticleTeaserGroup = {
  __typename?: 'Set_ReplicatorContent_ArticleTeaserGroup'
  headline: Maybe<Scalars['String']>
  replicator: Maybe<Array<Maybe<Sets_Replicator>>>
  type: Scalars['String']
}

export type Set_ReplicatorContent_ElementMTekstOgBillede = {
  __typename?: 'Set_ReplicatorContent_ElementMTekstOgBillede'
  background_color: Maybe<LabeledValue>
  background_color_magazine: Maybe<LabeledValue>
  bodytext: Maybe<Scalars['String']>
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_section: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  image_business: Maybe<AssetInterface>
  image_magazine: Maybe<AssetInterface>
  image_pages: Maybe<AssetInterface>
  image_providers: Maybe<AssetInterface>
  layout: Maybe<Scalars['String']>
  layout_direction: Maybe<LabeledValue>
  title: Scalars['String']
  title_font: LabeledValue
  title_size: LabeledValue
  type: Scalars['String']
  universe: LabeledValue
}

export type Set_ReplicatorContent_ElementWithTextAndIllustration = {
  __typename?: 'Set_ReplicatorContent_ElementWithTextAndIllustration'
  background: Maybe<LabeledValue>
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_section: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  heading_family: Maybe<LabeledValue>
  heading_type: Maybe<LabeledValue>
  illustration: LabeledValue
  layout: Maybe<Scalars['String']>
  layout_direction: Maybe<LabeledValue>
  text: Maybe<Scalars['String']>
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_ReplicatorContent_ElementWithTextAndTwoCards = {
  __typename?: 'Set_ReplicatorContent_ElementWithTextAndTwoCards'
  cards: Maybe<Array<Maybe<GridItem_Cards>>>
  text: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_ReplicatorContent_Facts = {
  __typename?: 'Set_ReplicatorContent_Facts'
  color: Maybe<LabeledValue>
  color_standard: Maybe<LabeledValue>
  fill: Maybe<LabeledValue>
  text_field: Maybe<Array<Maybe<Sets_TextField>>>
  type: Scalars['String']
}

export type Set_ReplicatorContent_FigureLarge = {
  __typename?: 'Set_ReplicatorContent_FigureLarge'
  caption: Maybe<Scalars['String']>
  image: Maybe<AssetInterface>
  type: Scalars['String']
}

export type Set_ReplicatorContent_LeadFamily = {
  __typename?: 'Set_ReplicatorContent_LeadFamily'
  display_smaller: Maybe<Scalars['Boolean']>
  lead_family_url: Scalars['String']
  type: Scalars['String']
}

export type Set_ReplicatorContent_NewsWidget = {
  __typename?: 'Set_ReplicatorContent_NewsWidget'
  news_widget_elements: Array<Maybe<Sets_NewsWidgetElements>>
  news_widget_title: Scalars['String']
  type: Scalars['String']
}

export type Set_ReplicatorContent_StepByStep = {
  __typename?: 'Set_ReplicatorContent_StepByStep'
  steps_element: Maybe<EntryInterface>
  type: Scalars['String']
}

export type Set_ReplicatorContent_Testimonials = {
  __typename?: 'Set_ReplicatorContent_Testimonials'
  testimonials: Maybe<Array<Maybe<EntryInterface>>>
  testimonials_title: Scalars['String']
  type: Scalars['String']
}

export type Set_ReplicatorContent_ThemeLinkGroup = {
  __typename?: 'Set_ReplicatorContent_ThemeLinkGroup'
  theme_links: Maybe<Array<Maybe<Sets_ThemeLinks>>>
  theme_title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_ReplicatorContent_VideoPlayer = {
  __typename?: 'Set_ReplicatorContent_VideoPlayer'
  description: Maybe<Scalars['String']>
  large_video: Maybe<Scalars['Boolean']>
  type: Scalars['String']
  video: AssetInterface
  video_poster: Maybe<AssetInterface>
}

export type Set_Replicator_Articles = {
  __typename?: 'Set_Replicator_Articles'
  cover_image: AssetInterface
  link: Scalars['String']
  sub_title: Scalars['String']
  title: Scalars['String']
  type: Scalars['String']
}

export type Set_Results_Resultat = {
  __typename?: 'Set_Results_Resultat'
  group: Scalars['String']
  html: Maybe<Scalars['String']>
  type: Scalars['String']
  up_to: Maybe<Scalars['Int']>
}

export type Set_Rows_Row = {
  __typename?: 'Set_Rows_Row'
  col_1: Maybe<Scalars['Boolean']>
  col_2: Maybe<Scalars['Boolean']>
  col_3_boern: Maybe<Scalars['Boolean']>
  col_3_rejse: Maybe<LabeledValue>
  row_heading: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_Steps_Step = {
  __typename?: 'Set_Steps_Step'
  bodytext: Maybe<Scalars['String']>
  illustration: Maybe<AssetInterface>
  title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_SubsidyTableSection_SubsidyTableMaxHeader = {
  __typename?: 'Set_SubsidyTableSection_SubsidyTableMaxHeader'
  subsidy_table_max_header_title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_SubsidyTableSection_SubsidyTableRow = {
  __typename?: 'Set_SubsidyTableSection_SubsidyTableRow'
  hasMoreText: Maybe<Scalars['Boolean']>
  isMaxText: Maybe<Scalars['Boolean']>
  subsidy_table_price_extended_operation: Maybe<Scalars['String']>
  subsidy_table_price_group_1: Maybe<Scalars['String']>
  subsidy_table_price_group_2: Maybe<Scalars['String']>
  subsidy_table_price_group_5: Maybe<Scalars['String']>
  subsidy_table_price_group_s: Maybe<Scalars['String']>
  subsidy_table_price_operation: Maybe<Scalars['String']>
  subsidy_title: Maybe<Scalars['String']>
  type: Scalars['String']
  whiteBackground: Maybe<Scalars['Boolean']>
}

export type Set_TextField_Knap = {
  __typename?: 'Set_TextField_Knap'
  button_icon: Maybe<LabeledValue>
  button_link: Maybe<Scalars['String']>
  button_text: Maybe<Scalars['String']>
  button_type: Maybe<LabeledValue>
  button_type_addon: Maybe<LabeledValue>
  type: Scalars['String']
}

export type Set_TextField_Pdf = {
  __typename?: 'Set_TextField_Pdf'
  button_type: Maybe<LabeledValue>
  file: Maybe<AssetInterface>
  link_title: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_TextField_Telefon = {
  __typename?: 'Set_TextField_Telefon'
  phone_number: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Set_ThemeLinks_ThemeLink = {
  __typename?: 'Set_ThemeLinks_ThemeLink'
  slug: Scalars['String']
  theme_headline: Scalars['String']
  theme_image: AssetInterface
  theme_sub_text: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Sets_Accordions = Set_Accordions_Accordion

export type Sets_Addons = Set_Addons_TilvalgsKort

export type Sets_Bodytext = BardText

export type Sets_Cards_Text = BardText

export type Sets_Categories = Set_Categories_Kategori

export type Sets_Content =
  | BardText
  | Set_Content_Accordion
  | Set_Content_CookieSamtykke
  | Set_Content_ElementMTekstOgBillede
  | Set_Content_ElementWithTextAndIllustration
  | Set_Content_ElementWithTextAndTwoCards
  | Set_Content_Facts
  | Set_Content_Image
  | Set_Content_Knap
  | Set_Content_Pdf
  | Set_Content_Reklamefilm
  | Set_Content_StepByStep
  | Set_Content_Telefon
  | Set_Content_Testimonials
  | Set_Content_TidsSkema
  | Set_Content_VideoPlayer

export type Sets_Description = BardText

export type Sets_EditorialContent = BardText

export type Sets_FooterContent =
  | Set_FooterContent_ArticleTeaserGroup
  | Set_FooterContent_ElementWithTextAndIllustration

export type Sets_Groups = Set_Groups_GruppeKort

export type Sets_Intro = BardText

export type Sets_ModalContent = BardText

export type Sets_NewsWidgetElements = Set_NewsWidgetElements_Nyhed

export type Sets_OperatingStatuses = Set_OperatingStatuses_OperatingStatus

export type Sets_Replicator = Set_Replicator_Articles

export type Sets_ReplicatorContent =
  | Set_ReplicatorContent_ElementMTekstOgBillede
  | Set_ReplicatorContent_ElementWithTextAndIllustration
  | Set_ReplicatorContent_ElementWithTextAndTwoCards
  | Set_ReplicatorContent_Facts
  | Set_ReplicatorContent_NewsWidget
  | Set_ReplicatorContent_StepByStep
  | Set_ReplicatorContent_Testimonials
  | Set_ReplicatorContent_VideoPlayer

export type Sets_RequirementsDescription = BardText

export type Sets_Results = Set_Results_Resultat

export type Sets_Results_Html = BardText

export type Sets_Rows = Set_Rows_Row

export type Sets_Steps = Set_Steps_Step

export type Sets_SubsidyTableSection =
  | Set_SubsidyTableSection_SubsidyTableMaxHeader
  | Set_SubsidyTableSection_SubsidyTableRow

export type Sets_SubsidyTableSection_SubsidyTitle = BardText

export type Sets_Text = BardText

export type Sets_TextField =
  | BardText
  | Set_TextField_Knap
  | Set_TextField_Pdf
  | Set_TextField_Telefon

export type Sets_ThemeLinks = Set_ThemeLinks_ThemeLink

export type Site = {
  __typename?: 'Site'
  handle: Scalars['String']
  locale: Scalars['String']
  name: Scalars['String']
  short_locale: Scalars['String']
  url: Scalars['String']
}

export type TableRow = {
  __typename?: 'TableRow'
  cells: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Taxonomy = {
  __typename?: 'Taxonomy'
  handle: Scalars['String']
  title: Scalars['String']
}

export type TermInterface = {
  edit_url: Scalars['String']
  id: Scalars['ID']
  permalink: Maybe<Scalars['String']>
  slug: Scalars['String']
  taxonomy: Taxonomy
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type TermInterfacePagination = {
  __typename?: 'TermInterfacePagination'
  /** Current page of the cursor */
  current_page: Scalars['Int']
  /** List of items on the current page */
  data: Maybe<Array<Maybe<TermInterface>>>
  /** Number of the first item returned */
  from: Maybe<Scalars['Int']>
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']
  /** The last page (number of pages) */
  last_page: Scalars['Int']
  /** Number of items returned per page */
  per_page: Scalars['Int']
  /** Number of the last item returned */
  to: Maybe<Scalars['Int']>
  /** Number of total items selected by the query */
  total: Scalars['Int']
}

export type Term_MagazineTerms_MagazineTerms = TermInterface & {
  __typename?: 'Term_MagazineTerms_MagazineTerms'
  edit_url: Scalars['String']
  id: Scalars['ID']
  image: Maybe<AssetInterface>
  permalink: Maybe<Scalars['String']>
  slug: Scalars['String']
  taxonomy: Taxonomy
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Term_SubsidyCategories_SubsidyCategories = TermInterface & {
  __typename?: 'Term_SubsidyCategories_SubsidyCategories'
  content: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  illustration: Maybe<AssetInterface>
  permalink: Maybe<Scalars['String']>
  slug: Scalars['String']
  taxonomy: Taxonomy
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Term_SubsidyCategories_SubsidyCategoriescontentArgs = {
  format?: InputMaybe<Scalars['String']>
}

export type Term_SubsidyYears_SubsidyYears = TermInterface & {
  __typename?: 'Term_SubsidyYears_SubsidyYears'
  content: Maybe<Scalars['String']>
  edit_url: Scalars['String']
  id: Scalars['ID']
  permalink: Maybe<Scalars['String']>
  slug: Scalars['String']
  taxonomy: Taxonomy
  title: Scalars['String']
  uri: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type Term_SubsidyYears_SubsidyYearscontentArgs = {
  format?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  edit_url: Maybe<Scalars['String']>
  email: Maybe<Scalars['String']>
  groups: Maybe<Array<Maybe<UserGroup>>>
  id: Maybe<Scalars['String']>
  initials: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  roles: Maybe<Array<Maybe<Role>>>
  tfa: Maybe<Scalars['String']>
}

export type UserGroup = {
  __typename?: 'UserGroup'
  handle: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type UserPagination = {
  __typename?: 'UserPagination'
  /** Current page of the cursor */
  current_page: Scalars['Int']
  /** List of items on the current page */
  data: Maybe<Array<Maybe<User>>>
  /** Number of the first item returned */
  from: Maybe<Scalars['Int']>
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']
  /** The last page (number of pages) */
  last_page: Scalars['Int']
  /** Number of items returned per page */
  per_page: Scalars['Int']
  /** Number of the last item returned */
  to: Maybe<Scalars['Int']>
  /** Number of total items selected by the query */
  total: Scalars['Int']
}

export type videoPlayerFieldsContentFragment = {
  __typename: 'Set_Content_VideoPlayer'
  type: string
}

export type videoPlayerFieldsReplicatorContentFragment = {
  __typename: 'Set_ReplicatorContent_VideoPlayer'
  type: string
}

export type getChrisContentQueryVariables = Exact<{
  uri: Scalars['String']
}>

export type getChrisContentQuery = {
  __typename?: 'Query'
  entry:
    | {
        __typename?: 'Entry_Advice_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Advice_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Advice_Themepage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Commercials_Commercials'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_ElementWithTextAndIllustration_ElementWithTextAndIllustration'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_OverFooter_OverFooter'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_StepByStep_StepByStep'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Testimonials_Testimonials'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Tilskud_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | null
}

export type getEntryQueryVariables = Exact<{
  uri: Scalars['String']
}>

export type getEntryQuery = {
  __typename?: 'Query'
  entry:
    | {
        __typename?: 'Entry_Advice_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Advice_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Advice_Themepage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Commercials_Commercials'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_ElementWithTextAndIllustration_ElementWithTextAndIllustration'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_OverFooter_OverFooter'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Frontpage'
        id: string
        description: string | null
        hero_body: string | null
        hero_title: string
        hero_link_title: string | null
        hero_link: string | null
        title: string
        blueprint: string | null
        hero_image:
          | { __typename?: 'Asset_All'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Assets'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Business'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Magazine'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Medier'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Pages'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Providers'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Subsidies'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Testimonials'; url: string | null; permalink: string | null }
        hero_usp_elements: Array<{
          __typename?: 'GridItem_HeroUspElements'
          text: string
          icon: { __typename?: 'LabeledValue'; value: string | null; label: string | null }
        } | null> | null
        replicator_content: Array<
          | {
              __typename: 'Set_ReplicatorContent_ElementMTekstOgBillede'
              bodytext: string | null
              layout: string | null
              button_link: string | null
              button_text: string | null
              title: string
              layout_direction: { __typename?: 'LabeledValue'; value: string | null } | null
              image_pages:
                | { __typename?: 'Asset_All' }
                | { __typename?: 'Asset_Assets' }
                | { __typename?: 'Asset_Business' }
                | { __typename?: 'Asset_Magazine' }
                | { __typename?: 'Asset_Medier' }
                | {
                    __typename?: 'Asset_Pages'
                    id: string
                    permalink: string | null
                    width: number | null
                    height: number | null
                    alt: string | null
                  }
                | { __typename?: 'Asset_Providers' }
                | { __typename?: 'Asset_Subsidies' }
                | { __typename?: 'Asset_Testimonials' }
                | null
              background_color: { __typename?: 'LabeledValue'; value: string | null } | null
            }
          | {
              __typename: 'Set_ReplicatorContent_ElementWithTextAndIllustration'
              text: string | null
              layout: string | null
              title: string
              button_link: string | null
              button_text: string | null
              layout_direction: { __typename?: 'LabeledValue'; value: string | null } | null
              background: { __typename?: 'LabeledValue'; value: string | null } | null
              illustration: { __typename?: 'LabeledValue'; value: string | null }
            }
          | { __typename: 'Set_ReplicatorContent_ElementWithTextAndTwoCards' }
          | { __typename: 'Set_ReplicatorContent_Facts' }
          | { __typename: 'Set_ReplicatorContent_NewsWidget' }
          | { __typename: 'Set_ReplicatorContent_StepByStep' }
          | { __typename: 'Set_ReplicatorContent_Testimonials' }
          | { __typename: 'Set_ReplicatorContent_VideoPlayer' }
          | null
        > | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_StepByStep_StepByStep'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Testimonials_Testimonials'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Tilskud_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | null
}

export type getFrontpageQueryVariables = Exact<{ [key: string]: never }>

export type getFrontpageQuery = {
  __typename?: 'Query'
  entry:
    | {
        __typename?: 'Entry_Advice_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Advice_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Advice_Themepage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Commercials_Commercials'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_ElementWithTextAndIllustration_ElementWithTextAndIllustration'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_OverFooter_OverFooter'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Frontpage'
        id: string
        description: string | null
        hero_body: string | null
        hero_title: string
        hero_link_title: string | null
        hero_link: string | null
        title: string
        blueprint: string | null
        hero_image:
          | { __typename?: 'Asset_All'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Assets'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Business'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Magazine'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Medier'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Pages'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Providers'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Subsidies'; url: string | null; permalink: string | null }
          | { __typename?: 'Asset_Testimonials'; url: string | null; permalink: string | null }
        hero_usp_elements: Array<{
          __typename?: 'GridItem_HeroUspElements'
          text: string
          icon: { __typename?: 'LabeledValue'; value: string | null; label: string | null }
        } | null> | null
        replicator_content: Array<
          | {
              __typename: 'Set_ReplicatorContent_ElementMTekstOgBillede'
              bodytext: string | null
              layout: string | null
              button_link: string | null
              button_text: string | null
              title: string
              layout_direction: { __typename?: 'LabeledValue'; value: string | null } | null
              image_pages:
                | { __typename?: 'Asset_All' }
                | { __typename?: 'Asset_Assets' }
                | { __typename?: 'Asset_Business' }
                | { __typename?: 'Asset_Magazine' }
                | { __typename?: 'Asset_Medier' }
                | {
                    __typename?: 'Asset_Pages'
                    id: string
                    permalink: string | null
                    width: number | null
                    height: number | null
                    alt: string | null
                  }
                | { __typename?: 'Asset_Providers' }
                | { __typename?: 'Asset_Subsidies' }
                | { __typename?: 'Asset_Testimonials' }
                | null
              background_color: { __typename?: 'LabeledValue'; value: string | null } | null
            }
          | {
              __typename: 'Set_ReplicatorContent_ElementWithTextAndIllustration'
              text: string | null
              layout: string | null
              title: string
              button_link: string | null
              button_text: string | null
              layout_direction: { __typename?: 'LabeledValue'; value: string | null } | null
              background: { __typename?: 'LabeledValue'; value: string | null } | null
              illustration: { __typename?: 'LabeledValue'; value: string | null }
            }
          | { __typename: 'Set_ReplicatorContent_ElementWithTextAndTwoCards' }
          | { __typename: 'Set_ReplicatorContent_Facts' }
          | { __typename: 'Set_ReplicatorContent_NewsWidget' }
          | { __typename: 'Set_ReplicatorContent_StepByStep' }
          | { __typename: 'Set_ReplicatorContent_Testimonials' }
          | { __typename: 'Set_ReplicatorContent_VideoPlayer' }
          | null
        > | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_StepByStep_StepByStep'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Testimonials_Testimonials'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'Entry_Tilskud_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Business_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Pages_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Providers_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Business_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Article'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Magazine_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Addon'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Form'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Pages_Tilskud'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Shadow'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | {
        __typename?: 'NavEntryPage_Universes_Providers_Standard'
        title: string
        blueprint: string | null
        collection: { __typename?: 'Collection'; handle: string }
      }
    | null
  globalSet:
    | {
        __typename?: 'GlobalSet_404Settings'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_ConsentSettings'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_DanmarkTesten'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_MagazineFacebook'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_MagazineLegalInfo'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_MagazineSymptomcheck'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_Seo'
        site: {
          __typename?: 'Site'
          locale: string
          name: string
          short_locale: string
          url: string
        }
      }
    | null
  nav: {
    __typename?: 'Navigation'
    title: string
    tree: Array<{
      __typename?: 'NavTreeBranch'
      page:
        | { __typename?: 'NavBasicPage_Business'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_BusinessFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_MagazineFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Pages'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_PagesFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Providers'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_ProvidersFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Universes'; title: string | null; url: string | null }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Business_Business_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Business_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Business_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Business_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_PagesFooter_Pages_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Form'; title: string; url: string | null }
        | { __typename?: 'NavEntryPage_Pages_Pages_Frontpage'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Standard'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Tilskud'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Standard'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Business_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Article'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Standard'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Tilskud'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Standard'
            title: string
            url: string | null
          }
        | null
    } | null> | null
  } | null
}

export type getGlobalSetQueryVariables = Exact<{
  handle: Scalars['String']
}>

export type getGlobalSetQuery = {
  __typename?: 'Query'
  globalSet:
    | {
        __typename?: 'GlobalSet_404Settings'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_ConsentSettings'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_DanmarkTesten'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_MagazineFacebook'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_MagazineLegalInfo'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_MagazineSymptomcheck'
        site: { __typename?: 'Site'; name: string; url: string }
      }
    | {
        __typename?: 'GlobalSet_Seo'
        site: {
          __typename?: 'Site'
          locale: string
          name: string
          short_locale: string
          url: string
        }
      }
    | null
}

export type getHeaderQueryVariables = Exact<{
  handle: Scalars['String']
}>

export type getHeaderQuery = {
  __typename?: 'Query'
  header: {
    __typename?: 'Navigation'
    title: string
    tree: Array<{
      __typename?: 'NavTreeBranch'
      page:
        | { __typename?: 'NavBasicPage_Business'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_BusinessFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_MagazineFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Pages'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_PagesFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Providers'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_ProvidersFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Universes'; title: string | null; url: string | null }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Business_Business_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Business_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Business_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Business_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_PagesFooter_Pages_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Form'; title: string; url: string | null }
        | { __typename?: 'NavEntryPage_Pages_Pages_Frontpage'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Standard'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Tilskud'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Standard'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Business_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Article'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Standard'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Tilskud'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Standard'
            title: string
            url: string | null
          }
        | null
      children: Array<{
        __typename?: 'NavTreeBranch'
        page:
          | { __typename?: 'NavBasicPage_Business'; url: string | null; title: string | null }
          | { __typename?: 'NavBasicPage_BusinessFooter'; url: string | null; title: string | null }
          | { __typename?: 'NavBasicPage_MagazineFooter'; url: string | null; title: string | null }
          | { __typename?: 'NavBasicPage_Pages'; url: string | null; title: string | null }
          | { __typename?: 'NavBasicPage_PagesFooter'; url: string | null; title: string | null }
          | { __typename?: 'NavBasicPage_Providers'; url: string | null; title: string | null }
          | {
              __typename?: 'NavBasicPage_ProvidersFooter'
              url: string | null
              title: string | null
            }
          | { __typename?: 'NavBasicPage_Universes'; url: string | null; title: string | null }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Business_Business_Form'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Business_Business_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Business_Business_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Business_Business_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_Form'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
              url: string | null
              title: string
            }
          | { __typename?: 'NavEntryPage_Pages_Pages_Addon'; url: string | null; title: string }
          | {
              __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
              url: string | null
              title: string
            }
          | { __typename?: 'NavEntryPage_Pages_Pages_Form'; url: string | null; title: string }
          | { __typename?: 'NavEntryPage_Pages_Pages_Frontpage'; url: string | null; title: string }
          | {
              __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
              url: string | null
              title: string
            }
          | { __typename?: 'NavEntryPage_Pages_Pages_Standard'; url: string | null; title: string }
          | {
              __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
              url: string | null
              title: string
            }
          | { __typename?: 'NavEntryPage_Pages_Pages_Tilskud'; url: string | null; title: string }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Providers_Providers_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Providers_Providers_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Business_Form'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Business_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Business_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Business_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Magazine_Article'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Magazine_Standard'
              url: string | null
              title: string
            }
          | { __typename?: 'NavEntryPage_Universes_Pages_Addon'; url: string | null; title: string }
          | {
              __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
              url: string | null
              title: string
            }
          | { __typename?: 'NavEntryPage_Universes_Pages_Form'; url: string | null; title: string }
          | {
              __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Pages_Standard'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Pages_Tilskud'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Providers_Shadow'
              url: string | null
              title: string
            }
          | {
              __typename?: 'NavEntryPage_Universes_Providers_Standard'
              url: string | null
              title: string
            }
          | null
      } | null> | null
    } | null> | null
  } | null
}

export type getNavQueryVariables = Exact<{
  handle: Scalars['String']
}>

export type getNavQuery = {
  __typename?: 'Query'
  nav: {
    __typename?: 'Navigation'
    title: string
    tree: Array<{
      __typename?: 'NavTreeBranch'
      page:
        | { __typename?: 'NavBasicPage_Business'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_BusinessFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_MagazineFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Pages'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_PagesFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Providers'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_ProvidersFooter'; title: string | null; url: string | null }
        | { __typename?: 'NavBasicPage_Universes'; title: string | null; url: string | null }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_BusinessFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Business_Business_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Business_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Business_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Business_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Article'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Magazine_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_MagazineFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_PagesFooter_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_PagesFooter_Pages_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_PagesFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Form'; title: string; url: string | null }
        | { __typename?: 'NavEntryPage_Pages_Pages_Frontpage'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Standard'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Pages_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Pages_Pages_Tilskud'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Addon'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Form'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Pages_Tilskud'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_ProvidersFooter_Providers_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Providers_Providers_Standard'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Business_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Business_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Article'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Magazine_Standard'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Addon'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_AddonOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Form'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_GroupOverview'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_Standard'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Pages_SubsidyOverview'
            title: string
            url: string | null
          }
        | { __typename?: 'NavEntryPage_Universes_Pages_Tilskud'; title: string; url: string | null }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Frontpage'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Shadow'
            title: string
            url: string | null
          }
        | {
            __typename?: 'NavEntryPage_Universes_Providers_Standard'
            title: string
            url: string | null
          }
        | null
    } | null> | null
  } | null
}

export const videoPlayerFieldsContentFragmentDoc = gql`
  fragment videoPlayerFieldsContent on Set_Content_VideoPlayer {
    __typename
    type
  }
`
export const videoPlayerFieldsReplicatorContentFragmentDoc = gql`
  fragment videoPlayerFieldsReplicatorContent on Set_ReplicatorContent_VideoPlayer {
    __typename
    type
  }
`
export const getChrisContentDocument = gql`
  query getChrisContent($uri: String!) {
    entry(uri: $uri) {
      title
      blueprint
      collection {
        handle
      }
    }
  }
`
export const getEntryDocument = gql`
  query getEntry($uri: String!) {
    entry(uri: $uri) {
      title
      blueprint
      collection {
        handle
      }
      ... on Entry_Pages_Frontpage {
        id
        description
        hero_body
        hero_image {
          url
          permalink
        }
        hero_title
        hero_link_title
        hero_link
        hero_usp_elements {
          icon {
            value
            label
          }
          text
        }
        replicator_content {
          __typename
          ... on Set_ReplicatorContent_ElementMTekstOgBillede {
            bodytext
            layout
            button_link
            button_text
            layout_direction {
              value
            }
            title
            image_pages {
              ... on Asset_Pages {
                id
                permalink
                width
                height
                alt
              }
            }
            background_color {
              value
            }
          }
          ... on Set_ReplicatorContent_ElementWithTextAndIllustration {
            text
            layout
            layout_direction {
              value
            }
            title
            background {
              value
            }
            button_link
            button_text
            illustration {
              value
            }
          }
        }
      }
    }
  }
`
export const getFrontpageDocument = gql`
  query getFrontpage {
    entry(uri: "/") {
      title
      blueprint
      collection {
        handle
      }
      ... on Entry_Pages_Frontpage {
        id
        description
        hero_body
        hero_image {
          url
          permalink
        }
        hero_title
        hero_link_title
        hero_link
        hero_usp_elements {
          icon {
            value
            label
          }
          text
        }
        replicator_content {
          __typename
          ... on Set_ReplicatorContent_ElementMTekstOgBillede {
            bodytext
            layout
            button_link
            button_text
            layout_direction {
              value
            }
            title
            image_pages {
              ... on Asset_Pages {
                id
                permalink
                width
                height
                alt
              }
            }
            background_color {
              value
            }
          }
          ... on Set_ReplicatorContent_ElementWithTextAndIllustration {
            text
            layout
            layout_direction {
              value
            }
            title
            background {
              value
            }
            button_link
            button_text
            illustration {
              value
            }
          }
        }
      }
    }
    globalSet(handle: "seo") {
      site {
        name
        url
      }
      ... on GlobalSet_Seo {
        site {
          locale
          name
          short_locale
          url
        }
      }
    }
    nav(handle: "universes") {
      title
      tree {
        page {
          title
          url
        }
      }
    }
  }
`
export const getGlobalSetDocument = gql`
  query getGlobalSet($handle: String!) {
    globalSet(handle: $handle) {
      site {
        name
        url
      }
      ... on GlobalSet_Seo {
        site {
          locale
          name
          short_locale
          url
        }
      }
    }
  }
`
export const getHeaderDocument = gql`
  query getHeader($handle: String!) {
    header: nav(handle: $handle) {
      title
      tree {
        page {
          title
          url
        }
        children {
          page {
            url
            title
          }
        }
      }
    }
  }
`
export const getNavDocument = gql`
  query getNav($handle: String!) {
    nav(handle: $handle) {
      title
      tree {
        page {
          title
          url
        }
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getChrisContent(
      variables: getChrisContentQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<getChrisContentQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<getChrisContentQuery>(getChrisContentDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getChrisContent',
        'query'
      )
    },
    getEntry(
      variables: getEntryQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<getEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<getEntryQuery>(getEntryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getEntry',
        'query'
      )
    },
    getFrontpage(
      variables?: getFrontpageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<getFrontpageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<getFrontpageQuery>(getFrontpageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getFrontpage',
        'query'
      )
    },
    getGlobalSet(
      variables: getGlobalSetQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<getGlobalSetQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<getGlobalSetQuery>(getGlobalSetDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getGlobalSet',
        'query'
      )
    },
    getHeader(
      variables: getHeaderQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<getHeaderQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<getHeaderQuery>(getHeaderDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getHeader',
        'query'
      )
    },
    getNav(
      variables: getNavQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<getNavQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<getNavQuery>(getNavDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getNav',
        'query'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>

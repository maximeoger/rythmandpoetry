<?php

namespace Models;

use Helpers\Database;

class Pages
{

  private $pdo;

  public function __construct()
  {
    $this->pdo = Database::get();
  }

  public function getAll() : array
  {
    $sql = "SELECT
    page_id,
    page_section_id,
    page_content_ids,
    page_musics,
    page_artists
    FROM
    pages;";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    if ($stmt->errorCode() !== '00000') {
      throw new \Exception("Error Processing Request", 1);
    }
    $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    return $rows;
  }

  public function getById(int $id) : ? array
  {
    $sql = "SELECT
    page_id,
    page_section_id,
    page_content_ids,
    page_musics,
    page_artists
    FROM
    pages
    WHERE
    page_id = :id;";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id, \PDO::PARAM_INT);
    $stmt->execute();
    if ($stmt->errorCode() !== '00000') {
      throw new \Exception("Error Processing Request", 1);
    }
    $row = $stmt->fetch(\PDO::FETCH_ASSOC);

    if ($row === false) {
      return null;
    }

    return $row;
  }

}